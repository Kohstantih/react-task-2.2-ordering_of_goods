export function ListItem(props) {
    const { obj } = props;

    return (
        <li className="list-item">
            <img className="list-item_img list-point" src={obj.img} alt="Изображение товара"/>
            <span className="list-item_title list-point">{obj.name.toUpperCase()}</span>
            <span className="list-item_color list-point">{obj.color}</span>
            <span className="list-item_price list-point">{`$${obj.price}`}</span>
            <button className="list-item_btn list-point">{'ADD TO CART'}</button>
        </li>
    )
}