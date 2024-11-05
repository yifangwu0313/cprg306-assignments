import ItemList from "./item_list";

export default function Page() {
  return (
    <main className="bg-white-50 text-black-900">
      <h1 className="text-2xl font-bold  m-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
