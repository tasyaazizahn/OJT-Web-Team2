import { useState } from "react";
import "../components/Table.css";

function Table({data}) {
  const [tableData, setTableData] = useState(data.map((item) => ({ ...item })));

  const allMonths = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const tanggalPerBulan = {
    Januari: ["20-28"],
    Februari: ["11-15"],
    Maret: ["17-24"],
    April: ["01-07"],
    Mei: ["08-17"],
    Juni: ["10-18"],
    Juli: ["18-27"],
    Agustus: ["16-28"],
    September: ["05-15"],
    Oktober: ["24-30"],
    November: ["11-19"],
    Desember: ["03-09"],
  };

  const handleBulanChange = (index, bulan) => {
    const newData = [...tableData];
    newData[index].bulan = bulan;

    // saat bulan dipilih, langsung assign tanggal otomatis
    newData[index].tanggal = tanggalPerBulan[bulan].join(", ");

    setTableData(newData);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nama Training</th>
          <th scope="col">Biaya</th>
          <th scope="col">Jumlah hari</th>
          <th scope="col">Bulan</th>
          <th scope="col">Tanggal</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.nama}</td>
            <td>{row.harga}</td>
            <td>{row.jmlHari}</td>
            <td>
              <select
                className="form-select form-select-sm"
                value={row.bulan}
                onChange={(e) => handleBulanChange(index, e.target.value)}
              >
                <option value="">--Pilih Bulan--</option>
                {allMonths.map((bulan) => (
                  <option key={bulan} value={bulan}>
                    {bulan}
                  </option>
                ))}
              </select>
            </td>
            <td>{row.tanggal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
