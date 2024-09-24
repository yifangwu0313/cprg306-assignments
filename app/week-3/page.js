import ItemList from "./item_list";

export default function Page() {
  return (
    <main className="bg-white-50 text-black-900">
      <h1 className="text-[28px] font-bold ml-5 mt-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}