import React, { useState } from "react";

function WoListApp() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedCount, setEditedCount] = useState(0);
  const [editedUnit, setEditedUnit] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

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
      alert("Gerakan ini sudah tercatat!");
      return;
    }

    // Jika newItem kosong (hanya spasi), tampilkan alert
    if (newItem.name.trim() === "") {
      alert("Kamu belum isi apapun, isi dulu ya!");
      return; // Hentikan penambahan jika input kosong
    }

    // Tambahkan newItem ke dalam daftar belanjaan
    if (newItem.name && newItem.count && newItem.unit) {
      setItems([...items, newItem]);
      return alert("Nama workout berhasil tercatat, SEMANGAT WORKOUT!");
      setItems([]);
    } else {
      alert("Isi dulu semua datanya ya, ada yang belum terisi!");
    }
  };

  const handleShowCompletedChange = (e) => {
    setShowCompletedOnly(e.target.checked);
    setEditIndex(null);
  };

  const editItem = (index, updateItem) => {
    const updatedItems = [...items];
    const isDuplicate = items.find(
      (item) =>
        item.name.trim().toLowerCase() === updateItem.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("Ganti nama workout lainnya ya, gerakan tersebut sudah tercatat!");
      return;
    }

    updatedItems[index] = updateItem;
    setItems(updatedItems);
  };

  const removeItem = (index) => {
    // if (confirm(Ingin menghapus?)) {
    setEditIndex(null);
    setItems(items.filter((item, i) => i !== index));
  };

  const removeAllItems = () => {
    setItems([]); // Menghapus semua inputan
  };

  const removeCompletedItems = () => {
    const filteredItems = items.filter((item) => !item.completed);
    setItems(filteredItems); // Menghapus semua inputan yang checkbox-nya sudah tercentang
  };

  const handleCheckboxChange = (itemId) => {
    setItems(
      items.map((item) => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <div className="max-w-auto w-full mx-auto border-[1px] border-black rounded-md py-2 px-2 pb-5 pt-3 shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Home Workout Day to Day</h1>
        <div className="max-w-auto mx-8 border-[1px] border-black rounded-md py-2 px-2 pb-3 pt-3 shadow-lg">
          <div className="h-10 w-[400px] mx-2 my-3 bg-[#14A3C7] rounded-full flex border-double border-[3px]">
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
            <div className="grid gap-x-4 grid-cols-4 p-3">
              <select
                className="border border-gray-300 p-1 hover:shadow-lg"
                name="itemName"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Pilih Nama Workout!
                </option>
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
                min="1"
                max="60"
                placeholder="Berapa Hitungan?"
                className="border border-gray-300 p-1 ml-4 hover:shadow-lg"
              ></input>
              <select
                className="border border-gray-300 p-1 ml-4 hover:shadow-lg"
                name="itemUnit"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Pilih Jenis Hitungan!
                </option>
                <option value="Repetisi">Repetisi</option>
                <option value="Detik">Detik</option>
                <option value="Menit">Menit</option>
              </select>
              <button
                type="submit"
                className="ml-4 rounded-full border-double border-[3px] px-4 py-2 hover:bg-[#357EC7] bg-[#14A3C7] text-white"
              >
                Tambah Catatan
              </button>
            </div>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-medium m-4">Workout List</h1>
          <div className="grid gap-x-3 grid-cols-3 px-3 pr-6 mb-10">
            <button
              type="checkbox"
              checked={showCompletedOnly}
              onClick={() => setShowCompletedOnly(!showCompletedOnly)} // Tambahkan ini untuk menampilkan semua hasil
              className="bg-[#14A3C7] hover:bg-[#357EC7] px-3 py-2 ml-6 rounded-md border-double border-[3px] text-white mx-2"
            >
              Semua
            </button>
            <button
              type="checkbox"
              onClick={() => {
                setShowCompletedOnly(true);
              }}
              className="bg-[#14A3C7] hover:bg-[#357EC7] px-3 py-2 ml-6 rounded-md border-double border-[3px] text-white mx-2"
            >
              Selesai
            </button>
            <button
              type="checkbox"
              onClick={() => {
                setShowCompletedOnly(false);
                setItems(items.filter((item) => !item.completed));
              }}
              className="bg-[#14A3C7] hover:bg-[#357EC7] px-3 py-2 ml-6 rounded-md border-double border-[3px] text-white mx-2"
            >
              Belum Selesai
            </button>
          </div>
        </div>
        {items.length > 0 ? ( // Ternary mengecek apakah panjang dari items lebih besar dari 0 (ada isinya)
          <div>
            <div className="grid grid-cols-6 px-9 items-center">
              <div className="border border-gray-700 px-3 py-2">Nama</div>
              <div className="border border-gray-700 py-2">Hitungan</div>
              <div className="border border-gray-700 py-2">Satuan</div>
              <div className="border border-gray-700 py-2">Selesai?</div>
              <div className="border border-gray-700 py-1">
                <img
                  src="edit.jpg"
                  width="32px"
                  height="32px"
                  className="ml-20"
                ></img>
              </div>
              <div className="border border-gray-700 py-1">
                <img
                  src="remove.jpg"
                  width="32px"
                  height="32px"
                  className="ml-20"
                ></img>
              </div>
            </div>
            <div>
              <ul>
                {items
                  .filter((item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .filter((item) => !showCompletedOnly || item.completed)
                  .map((item, index) => (
                    <li
                      key={item.id}
                      style={{
                        display:
                          showCompletedOnly && !item.completed
                            ? "none"
                            : "block",
                        textDecoration: item.completed
                          ? "line-through"
                          : "none",
                        color: item.completed ? "red" : "initial",
                      }}
                    >
                      {editIndex === index ? (
                        <div className="grid grid-cols-6 px-2 mt-5 py-2 mr-9 ml-9 rounded-md border-[1px] border-black items-center justify-center shadow-lg">
                          <select
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="border-gray-300 border-[1px] p-2 mr-4 text-justify"
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
                            value={editedCount}
                            onChange={(e) =>
                              setEditedCount(parseInt(e.target.value))
                            }
                            min="1"
                            max="60"
                            className="border-gray-300 border-[1px] p-2 mr-4 ml-2 text-center"
                          />
                          <select
                            type="text"
                            value={editedUnit}
                            onChange={(e) => setEditedUnit(e.target.value)}
                            className="border-gray-300 p-2 border-[1px] text-justify mr-4 ml-3"
                          >
                            <option value="Repetisi">Repetisi</option>
                            <option value="Detik">Detik</option>
                            <option value="Menit">Menit</option>
                          </select>
                          <div></div>

                          <button
                            className="bg-[#16F529] hover:bg-[#227442] hover:text-white p-2 rounded-md border-2 text-black px-10 ml-4 mr-1"
                            onClick={() => {
                              editItem(index, {
                                ...item,
                                name: editedName,
                                count: editedCount,
                                unit: editedUnit,
                              });
                              setEditIndex(null);
                            }}
                          >
                            Simpan
                          </button>

                          <button
                            className="bg-gray-400 hover:bg-black px-10 py-2 rounded-md border-2 text-white ml-4"
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
                          <div className="grid mt-5 py-2 mr-8 ml-9 rounded-md border-[1px] border-black items-center grid-cols-6">
                            <div>{item.name}</div>
                            <div>{item.count}</div>
                            <div>{item.unit}</div>
                            <input
                              type="checkbox"
                              checked={item.completed}
                              onChange={() => handleCheckboxChange(item.id)}
                            />

                            <span>
                              <button
                                onClick={() => setEditIndex(index)}
                                className="rounded-md bg-[#FF8C00] border-double border-2 px-10 py-2 hover:bg-[#FF5F1F] text-white"
                              >
                                Ubah
                              </button>
                            </span>
                            <span>
                              <button
                                onClick={() => removeItem(index)}
                                className="rounded-md bg-[#E41B17] border-double border-2 px-10 py-2 hover:bg-[#B21807] text-white row"
                              >
                                Hapus
                              </button>
                            </span>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="grid gap-x-8 grid-cols-2 px-3 pr-6 py-4 mt-5">
              <button
                onClick={() => {
                  removeCompletedItems(); // Panggil fungsi removeCompletedItems saat tombol "Hapus Terselesaikan" diklik
                }}
                className="bg-[#C83F49] hover:bg-[#C11B17] px-3 py-2 ml-6 rounded-md text-gray-300 mx-2 border-double border-[3px]"
              >
                Hapus List Workout Terselesaikan
              </button>
              <button
                onClick={() => {
                  removeAllItems(); // Panggil fungsi removeAllItems saat tombol "Hapus Semua" diklik
                }}
                className="bg-[#C83F49] hover:bg-[#C11B17] px-3 py-2 ml-7 rounded-md text-gray-300 mx-2 border-double border-[3px]"
              >
                Hapus Semua Riwayat Workout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center mb-6">Belum Ada List...</p>
        )}
      </div>
    </div>
  );
}

export default WoListApp;
