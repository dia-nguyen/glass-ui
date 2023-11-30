"use client";

import { BellIcon } from "@heroicons/react/24/outline";

export default function Notification() {
  return (
    <div className="my-5 flex gap-2 items-center">
      <span className="text-1xl">
        <BellIcon className="h-5 w-5 inline mr-2" />
        Feed the cats
      </span>
      <span className="text-black">6 PM</span>
    </div>
  );
}
