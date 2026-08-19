import FriendCard from "./components/FriendCard";
import { friends } from "./data/friends";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-1">
        Meet Team Beans!
      </h1>

      <p className="text-gray-600 text-sm mb-2">
        Creators of Career Quest
      </p>

      <p className="text-gray-700 mb-4 text-center text-sm">
        Tap a bean to visit a profile!
      </p>

      <div className="flex flex-col gap-3 w-full max-w-sm">
        {friends.map(friend => (
          <FriendCard
            key={friend.name}
            name={friend.name}
            url={friend.url}
            avatar={friend.avatar}
          />
        ))}
      </div>
    </main>
  );
}
