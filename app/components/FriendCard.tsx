import Image from "next/image";

interface Props {
  name: string;
  url: string;
  avatar: string;
}

export default function FriendCard({ name, url, avatar }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-white rounded-[25px] shadow-sm p-3 flex items-center gap-3 border border-blue-200 hover:shadow-md transition w-full max-w-sm mx-auto"
    >
      <Image
        src={avatar}
        alt={name}
        width={55}
        height={55}
        className="rounded-full object-cover border-2 border-blue-100"
      />

      <h2 className="text-base font-semibold text-gray-700">
        {name}
      </h2>
    </a>
  );
}
