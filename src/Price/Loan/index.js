import React, { Component } from "react";
import {
  Button,
  Divider,
  Card,
  List,
  Popup,
  Form,
  Input,
  Label,
  Icon
} from "semantic-ui-react";
import { Common } from "../Common";

export default class Loan extends Component {
  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header textAlign="center">예상 할부 결제액</Card.Header>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item>
              <Form>
                <Form.Group widths="equal">
                  <Form.Field
                    width={1}
                    readOnly
                    control={Input}
                    label="선납금1 (보조금)"
                    placeholder="선납금1"
                    value={Common.comma(this.props.calcFuncs["보조금"]())}
                  />
                  <Form.Field
                    width={1}
                    control={Input}
                    label="선납금2 (그 외)"
                    placeholder="선납금2"
                    value={Common.comma(this.props.prepay || "")}
                    onChange={this.props.onPrepayChange}
                  />
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Field
                    width={1}
                    type="number"
                    control={Input}
                    label="할부 연이율 (%)"
                    error={this.props.loan_rate === 0}
                    value={this.props.loan_rate || ""}
                    onChange={this.props.onLoanRateChange}
                  />
                  <Form.Field
                    width={1}
                    type="number"
                    control={Input}
                    label="할부 개월 수"
                    error={this.props.installment_months === 0}
                    value={this.props.installment_months || ""}
                    onChange={this.props.onMonthsChange}
                  />
                </Form.Group>
              </Form>
            </List.Item>
            <Divider />
            <List.Item>
              <List.Content>
                <List.Description>
                  <List>
                    {this.props.selectedOptions().map((v, i) => (
                      <List.Item key={i}>
                        <Label
                          as="a"
                          horizontal
                          color={v["가격"] > 0 ? "red" : null}
                        >
                          {v["이름"]}
                          <Label.Detail>
                            {Common.comma(this.props.usdTokrw(v["가격"])) +
                              "원"}
                          </Label.Detail>
                        </Label>
                      </List.Item>
                    ))}
                  </List>
                </List.Description>
              </List.Content>
            </List.Item>
            <Divider />
            <List.Item>
              <List.Icon name="car" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header style={{ color: "grey" }}>
                      {Common.comma(
                        this.props.calcFuncs["보조금_감면_전_차량가격"]()
                      ) + " 원"}
                    </List.Header>
                    <List.Description>차량 가격</List.Description>
                  </List.Content>
                }
                content="공장도 가격 + 부가가치세 + 개별소비세 + 교육세"
                size="small"
              />
            </List.Item>
            <Divider />
            <List.Item>
              <List.Icon name="minus" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header style={{ color: "green" }}>
                      {Common.comma(this.props.calcFuncs["보조금"]()) + " 원"}
                    </List.Header>
                    <List.Description>선납금1 (보조금)</List.Description>
                  </List.Content>
                }
                content="정부 보조금 + 지방자치단체 보조금"
                size="small"
              />
            </List.Item>
            <List.Item>
              <List.Icon name="minus" />
              <List.Content>
                <List.Header style={{ color: "green" }}>
                  {Common.comma(this.props.prepay) + " 원"}
                </List.Header>
                <List.Description>선납금2 (그 외)</List.Description>
              </List.Content>
            </List.Item>
            <Divider />
            <List.Item>
              <List.Icon name="won sign" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header style={{ color: "grey" }}>
                      {Common.comma(
                        this.props.calcFuncs["보조금_감면_후_차량가격"]() -
                          this.props.prepay
                      ) + " 원"}
                    </List.Header>
                    <List.Description>대출원금</List.Description>
                  </List.Content>
                }
                content="차량 가격 - 선납금"
                size="small"
              />
            </List.Item>
            <Divider />
            <List.Item>
              <List.Icon name="plus" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header
                      style={
                        this.props.calcFuncs["취득세"]() > 0
                          ? { color: "orange" }
                          : { color: "green" }
                      }
                    >
                      {Common.comma(this.props.calcFuncs["취득세"]()) + " 원"}
                    </List.Header>
                    <List.Description>취득세</List.Description>
                  </List.Content>
                }
                content={
                  Common.comma(this.props.calcFuncs["취득세_과세"]()) +
                  "원 중 " +
                  Common.comma(this.props.calcFuncs["취득세_감면"]()) +
                  "원 감면됨"
                }
                size="small"
              />
            </List.Item>
            <List.Item>
              <List.Icon name="plus" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header style={{ color: "orange" }}>
                      {Common.comma(this.props.calcFuncs["자동차세"]()) + " 원"}
                    </List.Header>
                    <List.Description>자동차세</List.Description>
                  </List.Content>
                }
                content="비영업용 기준"
                size="small"
              />
            </List.Item>
            <List.Item>
              <List.Icon name="calculator" />
              <Popup
                trigger={
                  <List.Content>
                    <List.Header>
                      {Common.comma(
                        this.props.calcFuncs["원리금균등상환_월납입금"](
                          this.props.calcFuncs["보조금_감면_후_차량가격"]() -
                            this.props.prepay,
                          this.props.loan_rate,
                          this.props.installment_months
                        )
                      ) + " 원"}
                    </List.Header>
                    <List.Description>월상환금</List.Description>
                  </List.Content>
                }
                content="원리금 균등상환방식 (취득세, 자동차세 별도)"
                size="small"
              />
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra textAlign="right">
          <Button
            href="https://www.tesla.com/ko_KR/model3/reserve"
            target="_blank"
            compact
            fluid
          >
            Model 3 사전 예약
          </Button>
        </Card.Content>
      </Card>
    );
  }
}
