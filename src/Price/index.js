import React, { Component } from "react";
import {
  Segment,
  Grid,
  Form,
  Checkbox,
  Button,
  Divider,
  Message,
  Card,
  Header,
  List,
  Tab,
  Input,
  Popup,
  Dropdown,
  Table
} from "semantic-ui-react";
import axios from "axios";
import YAML from "yamljs";

import { Common } from "./Common";
import Trim from "./Trim";
import Color from "./Color";
import Wheal from "./Wheal";
import Interior from "./Interior";
import AutoPilot from "./AutoPilot";

import "./index.css";

export default class Price extends Component {
  state = {
    trims: [],
    options: { color: [], interior: [], wheal: [], autopilot: [] },
    saletex: {
      개별소비세: { 과세: 0, 감면: 0 },
      교육세: { 과세: 0, 감면: 0 },
      취득세: { 과세: 0, 감면: 0 }
    },
    subsidy_list: [],
    loadingA: true,
    loadingB: true,
    performance_index: -1,

    base_selected: 0,
    base_price: 0,
    color_selected: 0,
    color_price: 0,
    wheal_selected: 0,
    wheal_price: 0,
    interior_selected: 0,
    interior_price: 0,
    autopilot_price: 0,
    total_price: 0,
    gov_subsidy: 0,
    local_subsidy: 0,
    final_price: 0,
    prepay: 0,
    annual_loan_interest_rate: 3.5,
    installment_months: 60
  };

  onTrimChange = (i, v) => {
    this.setState({
      base_price: Common.usdTokrw(v["가격"]),
      base_selected: i,
      wheal_price: 0,
      wheal_selected:
        v["이름"] === "Performance"
          ? 2
          : this.state.wheal_selected === 2
          ? 0
          : this.state.wheal_selected
    });
  };

  onColorChange = (i, v) => {
    this.setState({
      color_price: Common.usdTokrw(v["가격"]),
      color_selected: i
    });
  };

  onWhealChange = (i, v) => {
    this.setState({
      wheal_price: Common.usdTokrw(v["가격"]),
      wheal_selected: i
    });
  };

  onInteriorChange = (i, v) => {
    this.setState({
      interior_price: Common.usdTokrw(v["가격"]),
      interior_selected: i
    });
  };

  onAutoPilotChange = (v, checked) => {
    this.setState({
      autopilot_price: checked ? Common.usdTokrw(v["가격"]) : 0
    });
  };

  usdTokrw = usd => (usd * 1134.72).toFixed(0);
  comma = x =>
    Number(x)
      .toFixed(0)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  calcTotalPrice = () =>
    this.setState(prev => {
      return {
        total_price:
          Number(prev.base_price) +
          Number(prev.color_price) +
          Number(prev.wheal_price) +
          Number(prev.interior_price) +
          Number(prev.autopilot_price)
      };
    });
  부가가치세_과세 = () => this.state.total_price * 0.1;
  개별소비세_과세 = () =>
    this.state.total_price * this.state.saletex.개별소비세.과세;
  개별소비세_감면 = () =>
    Math.min(this.개별소비세_과세(), this.state.saletex.개별소비세.감면);
  교육세_과세 = () => this.개별소비세_과세() * this.state.saletex.교육세.과세;
  교육세_감면 = () =>
    Math.min(this.교육세_과세(), this.state.saletex.교육세.감면);
  취득세_과세 = () =>
    (this.state.total_price +
      (this.개별소비세_과세() - this.개별소비세_감면()) +
      (this.교육세_과세() - this.교육세_감면())) *
    this.state.saletex.취득세.과세;
  취득세_감면 = () =>
    Math.min(this.취득세_과세(), this.state.saletex.취득세.감면);
  전기차_보조금 = () => this.state.gov_subsidy + this.state.local_subsidy;
  할부원금 = () =>
    Math.max(
      this.state.total_price +
        this.부가가치세_과세() +
        this.개별소비세_과세() -
        this.개별소비세_감면() +
        this.교육세_과세() -
        this.교육세_감면(),
      0
    );
  최종가격 = () =>
    Math.max(
      this.state.total_price +
        this.부가가치세_과세() +
        this.개별소비세_과세() -
        this.개별소비세_감면() +
        this.교육세_과세() -
        this.교육세_감면() -
        this.전기차_보조금(),
      0
    );
  원리금균등상환_월납입금 = (대출원금, 연이자율, 할부개월) => {
    let 월이자율 = (연이자율 / 12) * 0.01;
    let x = Math.pow(1 + 월이자율, 할부개월);
    return (대출원금 * 월이자율 * x) / (x - 1);
  };

  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/model_3.yaml"
      )
      .then(res => {
        let data = YAML.parse(res.data);
        this.setState({
          trims: data.trims,
          options: data.options,
          base_price: this.usdTokrw(data.trims[0]["가격"]),
          base_selected: 0,
          loadingA: false
        });
        data.trims.forEach((v, i) => {
          if (v["이름"] === "Performance") {
            this.setState({ performance_index: i });
          }
        });
        this.calcTotalPrice();
      });

    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/saletex.yaml"
      )
      .then(res => {
        let data = YAML.parse(res.data);
        this.setState({
          saletex: {
            개별소비세: {
              과세: data["개별소비세"]["과세"],
              감면: data["개별소비세"]["감면"]
            },
            교육세: {
              과세: data["교육세"]["과세"],
              감면: data["교육세"]["감면"]
            },
            취득세: {
              과세: data["취득세"]["과세"],
              감면: data["취득세"]["감면"]
            }
          },
          loadingB: false
        });
      });

    axios
      .get(
        "https://raw.githubusercontent.com/geeksbaek/tesla-model-3-korea/master/data/subsidy.json"
      )
      .then(res => {
        this.setState({
          gov_subsidy: res.data.gov,
          subsidy_list: res.data.local
        });
      });
  }

  render() {
    return (
      <Segment
        textAlign="left"
        className="SegmentGroup"
        loading={this.state.loadingA && this.state.loadingB}
      >
        <Message info>
          <Message.List>
            <Message.Header>먼저 읽어주세요</Message.Header>
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Divider hidden fitted />
            <Message.Item>
              여기에서 표기되는 모든 가격은 USD를 현재 시간 기준의 환율을
              적용하여 KRW으로 나타낸 것입니다.
            </Message.Item>
            <Message.Item>
              구입에 필요한 최소한의 옵션이 미리 선택되어 있습니다.
            </Message.Item>
            <Message.Item>
              거주지를 선택하면 해당 지자체에서 지급하는 승용 전기차 보조금과
              정부에서 지급하는 전기차 보조금이 최종 가격에 반영됩니다.
            </Message.Item>
            <Message.Item>
              계산된 가격과 실제 가격은 차이가 발생할 수 있으며 이로 인해
              발생하는 문제에 대한 책임은 사용자에게 있습니다.
            </Message.Item>
          </Message.List>
        </Message>

        <Trim
          base_selected={this.state.base_selected}
          trims={this.state.trims}
          calcTotalPrice={this.calcTotalPrice}
          onChange={this.onTrimChange}
        />

        <Segment basic>
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Form>
                <Form.Group>
                  <Color
                    color_selected={this.state.color_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onColorChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Wheal
                    performance={
                      this.state.base_selected === this.state.performance_index
                    }
                    wheal_selected={this.state.wheal_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onWhealChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Interior
                    interior_selected={this.state.interior_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onInteriorChange}
                  />
                </Form.Group>

                <Form.Group>
                  <AutoPilot
                    autopilot_selected={this.state.autopilot_selected}
                    options={this.state.options}
                    calcTotalPrice={this.calcTotalPrice}
                    onChange={this.onAutoPilotChange}
                  />
                </Form.Group>

                <Divider hidden />
                <Form.Group>
                  <div style={{ width: "100%" }}>
                    <Header sub>전기차 보조금</Header>
                    <Dropdown
                      fluid
                      deburr
                      options={this.state.subsidy_list.map((v, i) => {
                        return {
                          key: i,
                          value: i,
                          text: `${v.name} (${this.comma(v.subsidy)}원)`
                        };
                      })}
                      placeholder="보조금 계산을 위해 거주지를 선택하세요"
                      selection
                      search
                      onChange={(e, { value }) => {
                        this.setState({
                          local_subsidy: this.state.subsidy_list[value].subsidy
                        });
                      }}
                    />
                  </div>
                </Form.Group>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Tab
                menu={{ secondary: true, pointing: true }}
                panes={[
                  {
                    menuItem: "현금",
                    render: () => (
                      <Card fluid>
                        <Card.Content>
                          <Card.Header textAlign="center">
                            예상 현금 가격
                          </Card.Header>
                        </Card.Content>
                        <Card.Content>
                          <List>
                            <List.Item>
                              <List.Icon name="car" />
                              <List.Content>
                                <List.Header style={{ color: "grey" }}>
                                  {this.comma(this.state.total_price) + " 원"}
                                </List.Header>
                                <List.Description>
                                  차량 공장도 가격
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <Divider />
                            <List.Item>
                              <List.Icon name="plus" />
                              <List.Content>
                                <List.Header style={{ color: "orange" }}>
                                  {this.comma(this.부가가치세_과세()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      부가가치세
                                    </List.Description>
                                  }
                                  content="취득 당시 가액의 10%"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="plus" />
                              <List.Content>
                                <List.Header style={{ color: "orange" }}>
                                  {this.comma(this.개별소비세_과세()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      개별소비세
                                    </List.Description>
                                  }
                                  content="공장도 가격의 5%"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="minus" />
                              <List.Content>
                                <List.Header style={{ color: "green" }}>
                                  {this.comma(this.개별소비세_감면()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      개별소비세 감면
                                    </List.Description>
                                  }
                                  content="최대 300만원 감면"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="plus" />
                              <List.Content>
                                <List.Header style={{ color: "orange" }}>
                                  {this.comma(this.교육세_과세()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>교육세</List.Description>
                                  }
                                  content="개별소비세의 30%"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="minus" />
                              <List.Content>
                                <List.Header style={{ color: "green" }}>
                                  {this.comma(this.교육세_감면()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      교육세 감면
                                    </List.Description>
                                  }
                                  content="최대 90만원 감면"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="plus" />
                              <List.Content>
                                <List.Header style={{ color: "orange" }}>
                                  {this.comma(this.취득세_과세()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>취득세</List.Description>
                                  }
                                  content="(공장도 가격 + 개별소비세 + 교육세)의 7%"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="minus" />
                              <List.Content>
                                <List.Header style={{ color: "green" }}>
                                  {this.comma(this.취득세_감면()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      취득세 감면
                                    </List.Description>
                                  }
                                  content="최대 140만원 감면"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <Divider />
                            <List.Item>
                              <List.Icon name="minus" />
                              <List.Content>
                                <List.Header style={{ color: "green" }}>
                                  {this.comma(this.state.gov_subsidy) + " 원"}
                                </List.Header>
                                <List.Description>정부 보조금</List.Description>
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="minus" />
                              <List.Content>
                                <List.Header style={{ color: "green" }}>
                                  {this.comma(this.state.local_subsidy) + " 원"}
                                </List.Header>
                                <List.Description>
                                  지방자치단체 보조금
                                </List.Description>
                              </List.Content>
                            </List.Item>
                            <Divider />
                            <List.Item>
                              <List.Icon name="plus" />
                              <List.Content>
                                <List.Header style={{ color: "orange" }}>
                                  {this.comma(
                                    this.취득세_과세() - this.취득세_감면()
                                  ) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>취득세</List.Description>
                                  }
                                  content="감면 후 금액"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                            <List.Item>
                              <List.Icon name="calculator" />
                              <List.Content>
                                <List.Header>
                                  {this.comma(this.최종가격()) + " 원"}
                                </List.Header>
                                <Popup
                                  trigger={
                                    <List.Description>
                                      최종 가격
                                    </List.Description>
                                  }
                                  content="취득세 별도"
                                  size="small"
                                />
                              </List.Content>
                            </List.Item>
                          </List>
                        </Card.Content>
                        <Card.Content extra textAlign="right">
                          <Button
                            primary
                            as="a"
                            href="https://www.tesla.com/ko_KR/model3/reserve"
                            target="_blank"
                          >
                            사전 예약
                          </Button>
                        </Card.Content>
                      </Card>
                    )
                  },
                  {
                    menuItem: "할부",
                    render: () => (
                      <div>
                        <Form>
                          <Form.Group widths="equal">
                            <Form.Field
                              readOnly
                              control={Input}
                              label="선납금1 (보조금)"
                              placeholder="선납금1"
                              value={this.comma(this.전기차_보조금())}
                            />
                            <Form.Field
                              control={Input}
                              label="선납금2 (그 외)"
                              placeholder="선납금2"
                              value={this.comma(this.state.prepay || "")}
                              onChange={(e, { value }) => {
                                if (value.match(/[^\d,]/g)) {
                                  return;
                                }
                                this.setState({
                                  prepay: Number(value.replace(/[,.]/g, ""))
                                });
                              }}
                            />
                          </Form.Group>
                          <Form.Group widths="equal">
                            <Form.Field
                              type="number"
                              control={Input}
                              label="할부 연이율 (%)"
                              error={this.state.annual_loan_interest_rate === 0}
                              value={this.state.annual_loan_interest_rate || ""}
                              onChange={(e, { value }) => {
                                this.setState({
                                  annual_loan_interest_rate: Number(value)
                                });
                              }}
                            />
                            <Form.Field
                              type="number"
                              control={Input}
                              label="할부 개월 수"
                              error={this.state.installment_months === 0}
                              value={this.state.installment_months || ""}
                              onChange={(e, { value }) => {
                                this.setState({
                                  installment_months: Number(value)
                                });
                              }}
                            />
                          </Form.Group>
                        </Form>
                        <Card fluid>
                          <Card.Content>
                            <Card.Header textAlign="center">
                              예상 할부 결제액
                            </Card.Header>
                          </Card.Content>
                          <Card.Content>
                            <List>
                              <List.Item>
                                <List.Icon name="car" />
                                <List.Content>
                                  <List.Header style={{ color: "grey" }}>
                                    {this.comma(this.할부원금()) + " 원"}
                                  </List.Header>
                                  <Popup
                                    trigger={
                                      <List.Description>
                                        할부원금
                                      </List.Description>
                                    }
                                    content="공장도 가격 + 부가가치세 + 개별소비세 + 교육세"
                                    size="small"
                                  />
                                </List.Content>
                              </List.Item>
                              <Divider />
                              <List.Item>
                                <List.Icon name="minus" />
                                <List.Content>
                                  <List.Header style={{ color: "green" }}>
                                    {this.comma(this.전기차_보조금()) + " 원"}
                                  </List.Header>
                                  <Popup
                                    trigger={
                                      <List.Description>
                                        선납금1
                                      </List.Description>
                                    }
                                    content="정부 보조금 + 지방자치단체 보조금"
                                    size="small"
                                  />
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name="minus" />
                                <List.Content>
                                  <List.Header style={{ color: "green" }}>
                                    {this.comma(this.state.prepay) + " 원"}
                                  </List.Header>
                                  <List.Description>선납금2</List.Description>
                                </List.Content>
                              </List.Item>
                              <Divider />
                              <List.Item>
                                <List.Icon name="won sign" />
                                <List.Content>
                                  <List.Header>
                                    {this.comma(
                                      this.할부원금() -
                                        this.전기차_보조금() -
                                        this.state.prepay
                                    ) + " 원"}
                                  </List.Header>
                                  <Popup
                                    trigger={
                                      <List.Description>
                                        대출원금
                                      </List.Description>
                                    }
                                    content="할부원금 - 선납금"
                                    size="small"
                                  />
                                </List.Content>
                              </List.Item>
                              <Divider />
                              <List.Item>
                                <List.Icon name="plus" />
                                <List.Content>
                                  <List.Header style={{ color: "orange" }}>
                                    {this.comma(
                                      this.취득세_과세() - this.취득세_감면()
                                    ) + " 원"}
                                  </List.Header>
                                  <Popup
                                    trigger={
                                      <List.Description>
                                        취득세
                                      </List.Description>
                                    }
                                    content="감면 후 금액"
                                    size="small"
                                  />
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Icon name="calculator" />
                                <List.Content>
                                  <List.Header>
                                    {this.comma(
                                      this.원리금균등상환_월납입금(
                                        this.할부원금() -
                                          this.전기차_보조금() -
                                          this.state.prepay,
                                        this.state.annual_loan_interest_rate,
                                        this.state.installment_months
                                      )
                                    ) + " 원"}
                                  </List.Header>
                                  <Popup
                                    trigger={
                                      <List.Description>
                                        월상환금
                                      </List.Description>
                                    }
                                    content="원리금 균등상환방식 (취득세 별도)"
                                    size="small"
                                  />
                                </List.Content>
                              </List.Item>
                            </List>
                          </Card.Content>
                          <Card.Content extra textAlign="right">
                            <Button
                              primary
                              as="a"
                              href="https://www.tesla.com/ko_KR/model3/reserve"
                              target="_blank"
                            >
                              사전 예약
                            </Button>
                          </Card.Content>
                        </Card>
                      </div>
                    )
                  }
                ]}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>Calc</Divider>
        </Segment>
      </Segment>
    );
  }
}
