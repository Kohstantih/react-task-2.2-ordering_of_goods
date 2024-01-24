export function CardsItem(props) {
    const { obj } = props;

    return (
        <li className="cards-item">
            <h3 className="cards-item_title cards-point">{obj.name.toUpperCase()}</h3>
            <span className="cards-item_color cards-point">{obj.color}</span>
            <img src={obj.img} alt="Изображение товара" className="cards-item_img cards-point"/>
            <div className="cards-item_footer cards-point">
                <span className="cards-item_price">{`$${obj.price}`}</span>
                <button className="cards-item_btn">{'ADD TO CART'}</button>
            </div>
        </li>
    )
}