"use client";
import React, { useState } from "react";
import * as ServerApi from "../../../services/services.js";

//20902958
interface listEncounters {
  createDate: string;
  roomName: string;
  icdName: string;
  doctorName: string;
  encounterCode: string;
}

interface informationTreatments {
  hospitalDischargeDate: string;

  roomName: string;

  doctorName: string;

  icdName: string;

  icdNameAttach: string;
}
interface years {
  yyyy: number;
}

export default function Page() {
  const [selectedYear, setSelectedYear] = useState([]);
  const [years, setYear] = useState<years[]>([]);
  const [mabn, setMabenhnhan] = useState("");
  const [listEncounters, setListEncounter] = useState<listEncounters[]>([]);
  const [informationTreatments, setInformationTreatment] = useState<
    informationTreatments[]
  >([]);
  const [tuyear, setTuyear] = useState<number>();
  const [denyear, setDenyear] = useState<number>();

  const handleInformationTreatment = (
    encounterCode: string,
    treatmentDate: string
  ) => {
    ServerApi.GetInformationTreatment("", {
      params: {
        encounterCode: encounterCode,
        treatmentDate: treatmentDate,
      },
    })
      .then((response) => {
        setInformationTreatment(response);
        console.log(response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const API = (mabn: string, years: string) => {
    ServerApi.getYear("", {
      params: {
        patientCode: mabn,
      },
    })
      .then((response) => {
        setYear(response);
      })
      .catch((error) => {
        console.log("Error:", error);
        alert("Vui lòng nhập đúng mã bệnh nhân");
      });

    ServerApi.getGetListEncounter("", {
      params: {
        patientCode: mabn,
        yearTreatment: years,
      },
    })
      .then((response) => {
        setListEncounter(response);
        console.log("setListEncounter:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const onClickNam = (e: any) => {
    API(mabn, e);
    setSelectedYear(e);
  };

  const onChangeMabn: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setMabenhnhan(event.target.value);
  };

  const Getnam = () => {
    API(mabn, "");
  };

  //   const ViewGetInformationTreatment = (mabn, selectedYear) => {
  //     ServerApi.GetListPrescription("", {
  //       params: {
  //         patientCode: mabn,
  //         yearTreatment: selectedYear,
  //       },
  //     })
  //       .then((response) => {
  //         setGetListPrescription(response);
  //       })
  //       .catch((error) => {
  //         console.log("Error:", error);
  //       });
  //     return (
  //       <>
  //         <h2>LIST Thuốc</h2>
  //         <table className="table-auto w-full">
  //           <thead>
  //             <tr>
  //               <th className="px-4 py-2">BÁC SĨ</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {getListPrescriptions.map((getListPrescription, index) => (
  //               <tr key={index}>
  //                 <td className="border px-4 py-2">
  //                   {getListPrescription.doctorName}
  //                 </td>
  //                 <td>
  //                   <button
  //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //                     onClick={() =>
  //                       ViewDetaitPrescription(
  //                         decodeURIComponent(getListPrescription.createDate),
  //                         getListPrescription.id
  //                       )
  //                     }
  //                   >
  //                     Chi Tiết
  //                   </button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </>
  //     );
  //   };

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">NHẬP MÃ BỆNH NHÂN TRA CỨU</h2>
        <input
          type="text"
          className="border px-4 py-2 mb-2 w-full"
          onChange={onChangeMabn}
        />
        <span>Từ</span>
        <input
          type="date"
          className="border px-4 py-2 mb-2 w-full"
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            const tuyear = selectedDate.getFullYear();
            setTuyear(tuyear);
            console.log(tuyear);
          }}
        />
        <span>Đến</span>
        <input
          type="date"
          className="border px-4 py-2 mb-2 w-full"
          onChange={(e) => {
            const selectedDate = new Date(e.target.value);
            const denyear = selectedDate.getFullYear();
            setDenyear(denyear);
            console.log(denyear);
          }}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={Getnam}
        >
          Tra Cứu
        </button>
      </div>

      <h2 className="text-xl font-bold mb-2">LIST YEAR</h2>
      <div className="mb-4">
        {years.map((year, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => onClickNam(year.yyyy)}
          >
            {year.yyyy}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-2">LIST Hồ Sơ Bệnh Án</h2>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">THỜI GIAN</th>
              <th className="px-4 py-2">PHÒNG KHÁM</th>
              <th className="px-4 py-2">CHẨN ĐOÁN</th>
              <th className="px-4 py-2">BÁC SĨ</th>
              <th className="px-4 py-2">CHI TIẾT</th>
            </tr>
          </thead>
          <tbody>
            {listEncounters.map((listEncounter, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{listEncounter.createDate}</td>
                <td className="border px-4 py-2">{listEncounter.roomName}</td>
                <td className="border px-4 py-2">{listEncounter.icdName}</td>
                <td className="border px-4 py-2">{listEncounter.doctorName}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={() =>
                    //   handleInformationTreatment(
                    //     listEncounter.encounterCode,
                    //     listEncounter.createDate
                    //   )
                    // }
                  >
                    Chi Tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <h2 className="text-xl font-bold mb-2">
        LIST thông tin chi tiết lần điều trị
      </h2>
      <div className="overflow-x-auto mb-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">THỜI GIAN</th>
              <th className="px-4 py-2">PHÒNG KHÁM</th>
              <th className="px-4 py-2">BÁC SĨ</th>
              <th className="px-4 py-2">CHẨN ĐOÁN</th>
              <th className="px-4 py-2">CHUẨN ĐOÁN KÈM THEO</th>
              <th className="px-4 py-2">CHI TIẾT</th>
            </tr>
          </thead>
          <tbody>
            {informationTreatments.map((informationTreatment, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">
                  {informationTreatment.hospitalDischargeDate}
                </td>
                <td className="border px-4 py-2">
                  {informationTreatment.roomName}
                </td>
                <td className="border px-4 py-2">
                  {informationTreatment.doctorName}
                </td>
                <td className="border px-4 py-2">
                  {informationTreatment.icdName}
                </td>
                <td className="border px-4 py-2">
                  {informationTreatment.icdNameAttach}
                </td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                    Chi Tiết Thuốc
                  </button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Chi Tiết CDHA
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
