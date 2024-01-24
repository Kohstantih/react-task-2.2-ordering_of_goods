import { ListItem } from "./ListItem";

export function ListView(props) {
    const { products } = props;
    const result = [];

    products.forEach((p) => result.push(<ListItem obj={p}/>))

    return (
        <ul className="list-view">{result}</ul>
    )
}