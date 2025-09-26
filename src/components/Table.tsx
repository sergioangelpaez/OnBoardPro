import mockData from "@/mockData.json";

const Table = () => {
  const cellStyle = "px-3 py-2";

  // Calcular el máximo XP para normalizar las barras de progreso
  const maxXp = Math.max(...mockData.map((student) => student.xp));

  return (
    <div className="bg-white p-2 rounded-lg transition duration-300 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 text-sm font-medium text-gray-600">
          <tr>
            <th className={`${cellStyle} w-4 text-center`}>#</th>
            <th className={`${cellStyle} w-34`}>Estudiante</th>
            <th className={`${cellStyle} w-16`}>Nivel</th>
            <th className={`${cellStyle} w-30`}>XP</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm">
          {mockData.map((student, index) => {
            const progress = Math.round((student.xp / maxXp) * 100);

            return (
              <tr
                key={student.id}
                className="odd:bg-white even:bg-gray-50 hover:bg-brand/20 cursor-pointer"
              >
                <td className={`${cellStyle} text-center`}>{index + 1}</td>
                <td className={cellStyle}>
                  <div className="flex gap-2 items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium truncate">
                        {student.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {student.username}
                      </p>
                    </div>
                  </div>
                </td>
                <td className={cellStyle}>{student.level}</td>
                <td className={cellStyle}>
                  <div
                    className="w-full h-2 rounded-full bg-gray-200"
                    title={`${progress}%`}
                  >
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
