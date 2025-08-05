import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    { id: "728ed521", amount: 134, status: "pending", username: "Adi Nugroho", email: "adi.nugroho@gmail.com" },
    { id: "728ed522", amount: 124, status: "success", username: "Rina Sari", email: "rina.sari@gmail.com" },
    { id: "728ed523", amount: 167, status: "success", username: "Bayu Saputra", email: "bayu.saputra@gmail.com" },
    { id: "728ed524", amount: 156, status: "failed", username: "Minerva Rahayu", email: "minerva.rahayu@gmail.com" },
    { id: "728ed525", amount: 145, status: "success", username: "Maya Kartika", email: "maya.kartika@gmail.com" },
    { id: "728ed526", amount: 189, status: "pending", username: "Dimas Pratama", email: "dimas.pratama@gmail.com" },
    { id: "728ed527", amount: 178, status: "success", username: "Wulan Ayu", email: "wulan.ayu@gmail.com" },
    { id: "728ed528", amount: 190, status: "success", username: "Rizky Hidayat", email: "rizky.hidayat@gmail.com" },
    { id: "728ed529", amount: 134, status: "failed", username: "Bagus Firmansyah", email: "bagus.firmansyah@gmail.com" },
    { id: "728ed52a", amount: 543, status: "success", username: "Anita Lestari", email: "anita.lestari@gmail.com" },
    { id: "728ed52b", amount: 234, status: "pending", username: "Teguh Wirawan", email: "teguh.wirawan@gmail.com" },
    { id: "728ed52c", amount: 345, status: "success", username: "Galih Putra", email: "galih.putra@gmail.com" },
    { id: "728ed52d", amount: 335, status: "failed", username: "Sinta Dewi", email: "sinta.dewi@gmail.com" },
    { id: "728ed52e", amount: 664, status: "pending", username: "Jeffry Kurniawan", email: "jeffry.kurniawan@gmail.com" },
    { id: "728ed52f", amount: 332, status: "success", username: "Reza Fauzan", email: "reza.fauzan@gmail.com" },
    { id: "728ed52g", amount: 413, status: "failed", username: "Eka Santoso", email: "eka.santoso@gmail.com" },
    { id: "728ed52h", amount: 345, status: "pending", username: "Yuliana Hartati", email: "yuliana.hartati@gmail.com" },
    { id: "728ed52i", amount: 754, status: "success", username: "Gary Bangkit", email: "gary.bangkit@gmail.com" },
    { id: "728ed52j", amount: 643, status: "failed", username: "Putri Handayani", email: "putri.handayani@gmail.com" },
    { id: "728ed52k", amount: 543, status: "pending", username: "Steve Hananto", email: "steve.hananto@gmail.com" },
    { id: "728ed52l", amount: 324, status: "success", username: "Lola Rahmawati", email: "lola.rahmawati@gmail.com" },
    { id: "728ed52m", amount: 123, status: "pending", username: "Eko Widodo", email: "eko.widodo@gmail.com" },
    { id: "728ed52n", amount: 422, status: "failed", username: "Grace Utami", email: "grace.utami@gmail.com" },
    { id: "728ed52o", amount: 712, status: "success", username: "Sari Wulandari", email: "sari.wulandari@gmail.com" },
    { id: "728ed52p", amount: 360, status: "success", username: "Bryan Gunawan", email: "bryan.gunawan@gmail.com" },
    { id: "728ed52q", amount: 454, status: "pending", username: "Erik Rachman", email: "erik.rachman@gmail.com" },
    { id: "728ed52r", amount: 382, status: "success", username: "Jordy Apriansyah", email: "jordy.apriansyah@gmail.com" },
    { id: "728ed52s", amount: 328, status: "failed", username: "Budi Santosa", email: "budi.santosa@gmail.com" },
    { id: "728ed52t", amount: 250, status: "success", username: "Edwin Saputra", email: "edwin.saputra@gmail.com" },
    { id: "728ed52u", amount: 658, status: "success", username: "Herlina Damayanti", email: "herlina.damayanti@gmail.com" },
    { id: "728ed52v", amount: 691, status: "success", username: "Hana Rizkia", email: "hana.rizkia@gmail.com" },
    { id: "728ed52w", amount: 969, status: "success", username: "Zaky Rinaldi", email: "zaky.rinaldi@gmail.com" },
    { id: "728ed52x", amount: 617, status: "failed", username: "Fransiska Putra", email: "fransiska.putra@gmail.com" },
    { id: "728ed52y", amount: 173, status: "success", username: "Raimond Prasetyo", email: "raimond.prasetyo@gmail.com" },
    { id: "728ed52z", amount: 843, status: "success", username: "Adam Supriyadi", email: "adam.supriyadi@gmail.com" },
    { id: "728ed521f", amount: 914, status: "pending", username: "Annisa Kurnia", email: "annisa.kurnia@gmail.com" },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
