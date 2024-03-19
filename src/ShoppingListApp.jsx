import React, { useState } from "react";

function ShoppingListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addItem = (newItem) => {
    // Mengecek apakah item sudah ada dalam daftar belanjaan sebelumnya
    const isDuplicate = items.find(
      (item) =>
        item.name.trim().toLowerCase() === newItem.name.trim().toLowerCase()
    ); // Membandingkan itemname dengan newitem (yang mau ditambahkan)
    //trim untuk menghapus spasi di depan sebelum dibandingkan
    if (isDuplicate) {
      // Jika ditemukan item dengan nama yang sama, munculkan alert
      alert("Belanjaan ini sudah ada loh! Yuk masukkan yang lain");
      return;
    }

    // Jika newItem kosong (hanya spasi), tampilkan alert
    if (newItem.name.trim() === "") {
      alert("Kamu Belum Isi Apapun Nih. Yuk Isi Dulu!");
      return; // Hentikan penambahan jika input kosong
    }

    // Tambahkan newItem ke dalam daftar belanjaan
    setItems([...items, newItem]);
  };

  const editItem = (index, updateItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updateItem;
    setItems(updatedItems);
    const isDuplicate = items.find(
      (item) =>
        item.name.trim().toLowerCase() === newItem.name.trim().toLowerCase()
    ); // Membandingkan itemname dengan newitem (yang mau ditambahkan)
    //trim untuk menghapus spasi di depan sebelum dibandingkan
    if (isDuplicate) {
      // Jika ditemukan item dengan nama yang sama, munculkan alert
      alert("Belanjaan ini sudah ada loh! Yuk masukkan yang lain");
      return;
    }
  };

  const removeItem = (index) => {
    setEditIndex(null);
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          const newItemName = e.target.itemName.value;

          addItem({
            id: Date.now(),
            name: newItemName,
          });
          e.target.reset();
        }}
      > */}
      {/* <input
          type="text"
          name="itemName"
          placeholder="Item name"
          className="mb-6 rounded-xl border-2 border-gray-500 p-2"
        ></input> */}
      <Link
        to={`/shopping-list-app/add-item`}
        className="ml-4 rounded-full bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
      >
        Add Item
      </Link>
      {/* </form> */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-6 rounded-full border-2 border-gray-500 py-2 px-96 text-center"
      />
      <ul>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <li key={item.id}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="border-black p-1"
                  />
                  <button
                    className="bg-white hover:bg-gray-300 px-3 py-1 ml-6 rounded-full border border-black text-black mx-2"
                    onClick={() => {
                      editItem(index, { ...item, name: editedName });
                      setEditedName(editedName);
                      setEditIndex(null);
                    }}
                  >
                    Save
                  </button>
                  <button
                    className="bg-white hover:bg-gray-300 px-3 py-1 rounded-full border border-black text-black mx-2"
                    onClick={() => {
                      setEditIndex(null); // Mengosongkan editIndex untuk membatalkan edit
                      setEditedName(""); // Mengosongkan nilai editedName
                    }}
                  >
                    Batal
                  </button>
                </>
              ) : (
                <>
                  <span>{item.name}</span>
                  <button
                    onClick={() => setEditIndex(index)}
                    className="ml-6 rounded-full bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeItem(index)}
                    className="ml-6 rounded-full bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
                  >
                    Remove
                  </button>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ShoppingListApp;
