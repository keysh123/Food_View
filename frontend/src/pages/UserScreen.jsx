import React, { useEffect, useState } from "react";

const UserScreen = () => {
  const [items, setItems] = useState([]);

  const fetchReels = async () => {
    const result = await fetch("http://localhost:3000/api/food", {
      method: "GET",
      credentials: "include",
    });
    const data = await result.json();
    console.log(data);
    
    setItems(data.foodItems);
  };

  useEffect(() => {
    fetchReels();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Mobile frame */}
      <div className="w-[360px] h-[720px] bg-black rounded-[30px] overflow-hidden border border-gray-300">
        
        {/* Reel container */}
        <div className="h-full w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">
          
          {items.map((item) => (
            <div
              key={item._id}
              className="relative h-full w-full snap-start"
            >
              {/* Video */}
              <video
                src={item.video}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Top bar */}
              <div className="absolute top-0 left-0 w-full p-4 text-white flex justify-between text-sm">
                <span className="font-semibold">For You</span>
                <span>•••</span>
              </div>

              {/* Right actions */}
              <div className="absolute right-3 bottom-24 flex flex-col items-center gap-5 text-white text-xl">
                <button>❤️</button>
                <button>💬</button>
                <button>🔖</button>
                <button>↗</button>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/70 to-transparent">
                <h2 className="text-base font-semibold">
                  {item.name}
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  @{item.foodPartner?.name || "Food Partner"}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default UserScreen;
