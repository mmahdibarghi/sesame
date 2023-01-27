import { Col, Row } from "react-bootstrap";
import {
  ScoreBoardContainer,
  FullBoardButton,
  ScoreBoardHeaderText,
  FiltersButton,
  ScoreBoardTable,
  ScoreBoardRow,
  ScoreBoardItem,
  ScoreBoardHeader,
} from "./scoreboard-styles";

import { ThreeDotsVertical } from "react-bootstrap-icons";

function ScoreBoard() {
  return (
    <ScoreBoardContainer>
      <Row>
        <Col sm={6}>
          <ScoreBoardHeaderText>پلاک های ثبت شده</ScoreBoardHeaderText>
        </Col>
        <Col className="text-start">
          <FullBoardButton> مشاهده کامل جدول</FullBoardButton>
          <FiltersButton>فیلتر</FiltersButton>
        </Col>
      </Row>

      <ScoreBoardTable>
        <ScoreBoardRow>
          <ScoreBoardHeader>رتبه</ScoreBoardHeader>
          <ScoreBoardHeader>نام تیم</ScoreBoardHeader>
          <ScoreBoardHeader>زمان ارسال</ScoreBoardHeader>
          <ScoreBoardHeader>امتیاز</ScoreBoardHeader>
          <ScoreBoardHeader style={{ width: "8vw" }}></ScoreBoardHeader>
        </ScoreBoardRow>

        <ScoreBoardRow>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem>
            <ThreeDotsVertical />
          </ScoreBoardItem>
        </ScoreBoardRow>

        <ScoreBoardRow>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem>
            <ThreeDotsVertical />
          </ScoreBoardItem>
        </ScoreBoardRow>
        <ScoreBoardRow>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem>
            <ThreeDotsVertical />
          </ScoreBoardItem>
        </ScoreBoardRow>

        <ScoreBoardRow>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem>
            <ThreeDotsVertical />
          </ScoreBoardItem>
        </ScoreBoardRow>
        <ScoreBoardRow>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem></ScoreBoardItem>
          <ScoreBoardItem>
            <ThreeDotsVertical />
          </ScoreBoardItem>
        </ScoreBoardRow>
      </ScoreBoardTable>
    </ScoreBoardContainer>
  );
}

export default ScoreBoard;
