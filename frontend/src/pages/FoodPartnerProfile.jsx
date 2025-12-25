import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FoodPartnerProfile = () => {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    const result = await fetch(
      `http://localhost:3000/api/food/food-partner/${id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await result.json();
    setPartner(data.foodPartner);
    setItems(data.foodItems);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!partner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-[360px] bg-white min-h-screen">

        {/* Header */}
        <div className="p-4 flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-lg font-semibold">
              {partner.fullName}
            </h1>
            <p className="text-sm text-gray-500">
              @{partner.fullName.replace(/\s+/g, "").toLowerCase()}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-around text-center py-4 border-b">
          <div>
            <p className="font-semibold">{items.length}</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>
          <div>
            <p className="font-semibold">—</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div>
            <p className="font-semibold">—</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-3 gap-[2px] mt-1">
          {items.map((item) => (
            <div key={item._id} className="aspect-square bg-black">
              <video
                src={item.video}
                className="h-full w-full object-cover"
                muted
                preload="metadata"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FoodPartnerProfile;
