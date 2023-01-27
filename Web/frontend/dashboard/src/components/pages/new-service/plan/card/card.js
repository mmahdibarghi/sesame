import { CardContainer } from "./card-styles";
import { BuyButton, BuyContainer } from "./card-styles";

const Card = ({cpu, ram, hdd, gpu, price, onClick=()=>{}}) => {
    return (
        <CardContainer>
                <div>
                    <span>حافظه اصلی: </span>{ram}
                </div>
                <div>
                    <span>هارد دیسک: </span>{hdd}
                </div>
                <div>
                    <span>پردازشگر: </span>{cpu}
                </div>
                <div>
                    <span>پردازشگر گرافیکی: </span>{gpu}
                </div>
                <div>
                    <span>قیمت: </span>{price}
                </div>
                <BuyContainer>
                    <BuyButton onClick={onClick}>خرید</BuyButton>
                </BuyContainer>
        </CardContainer>
    )
}

export default Card;