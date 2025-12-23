"use client";

export default function Sidebar({ onlineUsers, currentUser }) {
  return (
    <aside className="w-64 bg-[#1e1f29] border-r border-orange-500/20 flex flex-col">
      <div className="p-4 border-b border-orange-500/20">
        <h2 className="text-orange-400 font-bold text-lg">
          Online Users
        </h2>
        <p className="text-xs text-zinc-400 mt-1">
          {onlineUsers?.length || 0} user(s) online
        </p>
      </div>

      <ul className="flex-1 overflow-y-auto p-4 space-y-2">
        {onlineUsers?.length === 0 && (
          <li className="text-zinc-400 text-sm">
            No users online
          </li>
        )}

        {onlineUsers?.map((user) => {
          const isMe = currentUser && user === currentUser;

          return (
            <li
              key={user}
              className={`
                flex items-center gap-3
                px-3 py-2
                rounded-lg
                text-sm
                ${
                  isMe
                    ? "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                    : "bg-[#282a36] text-zinc-200"
                }
              `}
            >
              <div
                className={`
                  w-8 h-8 rounded-full
                  flex items-center justify-center
                  font-bold text-sm
                  ${
                    isMe
                      ? "bg-orange-500 text-black"
                      : "bg-zinc-700 text-orange-300"
                  }
                `}
              >
                {user?.charAt(0)?.toUpperCase()}
              </div>

              <div className="flex-1 truncate">
                {user}
                {isMe && (
                  <span className="ml-2 text-[10px] text-orange-400">
                    (You)
                  </span>
                )}
              </div>

              <span className="w-2 h-2 rounded-full bg-green-500" />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
