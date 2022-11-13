import { useStore } from "@nanostores/react";
import { itemsStore } from "../stores/itemsStore";

export default function Items({}) {
  const $itemsStore = useStore(itemsStore);

  return (
    <ul>
      {$itemsStore.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
