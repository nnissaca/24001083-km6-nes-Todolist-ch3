import React, { useState } from "react";

function WorkoutListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedCount, setEditedCount] = useState(0);
  const [editedUnit, setEditedUnit] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const addItem = (newItem) => {
    // Tambahkan newItem ke dalam daftar belanjaan
    if (newItem.name && newItem.count) {
      setItems([...items, newItem]);
      return alert("Berhasil menambahkan data");
    }
    alert("Mohon inputkan data keseluruhan");
  };

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

  const editItem = (index, updateItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updateItem;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    if (confirm(`Ingin menghapus?`)) {
      setEditIndex(null);
      setItems(items.filter((item, i) => i !== index));
    }
  };

  return (
    <div>
      <div className="max-w-auto w-full mx-auto border-[1px] border-black rounded-md py-2 px-2 pb-5 pt-3">
        <h1 className="text-2xl font-bold mb-5 bg">
          Home Workout Challenge Day to Day
        </h1>
        <div className="max-w-auto mx-8 border-[1px] border-black rounded-md py-2 px-2 pb-5 pt-3">
          <div className="h-10 w-[300px] mx-2 my-3 bg-[#14A3C7] rounded-full flex">
            <img
              src="search.jpg"
              width="40px"
              height="40px"
              className="rounded-full"
            ></img>
            <input
              type="text"
              placeholder="Mau Cari Apa?"
              value={searchTerm}
              onChange={handleSearch}
              className="bg-transparent text-white placeholder:text-white p-2 rounded-full outline-none"
            />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const newItemName = e.target.itemName.value;
              const newItemCount = parseInt(e.target.itemCount.value);
              const newItemUnit = e.target.itemUnit.value;

              addItem({
                id: Date.now(),
                name: newItemName,
                count: newItemCount,
                unit: newItemUnit,
              });
              e.target.reset();
            }}
          >
            <select
              className="border border-gray-300 p-1"
              placeholder="Pilih Nama Workout"
              name="itemName"
            >
              <option value="Sit-Up">Sit-Up</option>
              <option value="Burpees">Burpees</option>
              <option value="Squats">Squats</option>
              <option value="Push-Up">Push-Up</option>
              <option value="Jumping Jacks">Jumping Jacks</option>
              <option value="Lunges">Lunges</option>
              <option value="Crunches">Crunches</option>
              <option value="Wall Sit">Wall Sit</option>
              <option value="Plank">Plank</option>
              <option value="Leg Raises">Leg Raises</option>
            </select>
            <input
              type="number"
              name="itemCount"
              placeholder="Berapa Hitungan?"
              className="mb-6 rounded-md border-2 border-gray-500 p-2"
            ></input>
            <select
              className="border border-gray-300 p-1"
              placeholder="Pilih Jenis Hitungan"
              name="itemUnit"
            >
              <option value="Kali">Kali</option>
              <option value="Detik">Detik</option>
            </select>
            <button
              type="submit"
              className="ml-4 rounded-md bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
            >
              Tambah Catatan
            </button>
          </form>
        </div>
        <h1 className="text-2xl font-medium m-4">Workout List</h1>
        <div grid>
          <button className="bg-[#14A3C7] hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-white mx-2">
            All
          </button>
          <button className="bg-[#14A3C7] hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-white mx-2">
            Done
          </button>
          <button className="bg-[#14A3C7] hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-white mx-2">
            To Do
          </button>
        </div>
        <ul>
          {items
            .filter((item) =>
              item.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <li key={item.id}>
                {editIndex === index ? (
                  <select
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className="border-black p-1"
                  >
                    <option value="Sit-Up">Sit-Up</option>
                    <option value="Burpees">Burpees</option>
                    <option value="Squats">Squats</option>
                    <option value="Push-Up">Push-Up</option>
                    <option value="Jumping Jacks">Jumping Jacks</option>
                    <option value="Lunges">Lunges</option>
                    <option value="Crunches">Crunches</option>
                    <option value="Wall Sit">Wall Sit</option>
                    <option value="Plank">Plank</option>
                    <option value="Leg Raises">Leg Raises</option>
                  </select>
                ) : (
                  <span>{item.name}</span>
                )}
                {editIndex === index ? (
                  <input
                    value={editedCount}
                    type="number"
                    min="1"
                    className="border-black p-1"
                    onChange={(e) => setEditedCount(e.target.value)}
                  />
                ) : (
                  <span>{item.count}</span>
                )}
                {editIndex === index ? (
                  <select
                    value={editedUnit}
                    onChange={(e) => setEditedUnit(e.target.value)}
                    className="border-black p-1"
                  >
                    <option value="Kali">Kali</option>
                    <option value="Detik">Detik</option>
                  </select>
                ) : (
                  <span>{item.unit}</span>
                )}
                {editIndex === index ? (
                  <div>
                    <button
                      className="bg-white hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-black mx-2"
                      onClick={() => {
                        editItem(index, {
                          ...item,
                          name: editedName,
                          count: editedCount,
                          unit: editedUnit,
                        });
                        setEditedName(editedName);
                        setEditedCount(0);
                        setEditedUnit("");
                        setEditIndex(null);
                      }}
                    >
                      Save
                    </button>
                    <button
                      className="bg-white hover:bg-gray-300 px-3 py-1 rounded-md border border-black text-black mx-2"
                      onClick={() => {
                        setEditIndex(null); // Mengosongkan editIndex untuk membatalkan edit
                        setEditedName(""); // Mengosongkan nilai editedName
                        setEditedCount(0);
                        setEditedUnit("");
                      }}
                    >
                      Batal
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{item.name}</span>
                    <button
                      onClick={() => setEditIndex(index)}
                      className="ml-6 rounded-md bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItem(index)}
                      className="ml-6 rounded-md bg-white border-double border-2 px-4 py-1 hover:bg-gray-300"
                    >
                      Remove
                    </button>
                  </>
                )}
              </li>
            ))}
        </ul>
        <div>
          <button className="bg-[#C83F49] hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-gray-300 mx-2">
            Delete Done Task
          </button>
          <button className="bg-[#C83F49] hover:bg-gray-300 px-3 py-1 ml-6 rounded-md border border-black text-gray-300 mx-2">
            Delete All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkoutListApp;
