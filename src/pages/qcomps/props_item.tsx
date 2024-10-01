import { ItemProps } from "@/types/item";

function StrikeItem({ name }: { name: string }) {
  return <del>{name}</del>;
}

function Item({ name, isPacked } : ItemProps) {
  return (
    <li className="item">
      {isPacked ? <StrikeItem name={name} /> : name}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
