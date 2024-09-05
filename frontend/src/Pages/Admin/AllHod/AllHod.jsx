import React, { useEffect, useState } from "react";
import HodList from "../../../Components/HodList/HodList";
import { getAllHods } from "../../../api/Admin/Admin.api";
import hodData from "../../../SampleData/HodList";

const AllHod = () => {
  const [hods, setHods] = useState(hodData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHods = async () => {
      try {
        const response = await getAllHods();
        setHods(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHods();
  }, []);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div className="mb-4 pb-10 min-h-screen px-8 mx-4 rounded">
        <div className="text-gray-100 font-bold text-3xl p-5">Hods</div>
        <HodList data={hods} />
      </div>
    </div>
  );
};

export default AllHod;
