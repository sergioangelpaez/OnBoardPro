//https://dribbble.com/shots/24320738-slothUI-World-s-Laziest-Design-System-Table-Component-UIUX

const Table = () => {
  return (
    <table className="border border-border w-full text-left p-2">
      <thead>
        {" "}
        <tr>
          <th className="p-1 w-4"></th>
          <th className="p-1 w-36">Estudiante</th>
          <th className="p-1 w-20">Nivel</th>
          <th className="p-1 w-28">XP</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-1">1</td>
          <td className="p-1 flex gap-2 items-center">
            <div className="rounded-full w-8 h-8 bg-brand">
              <img src="/hornet.jpg" alt="" className="rounded-full" />
            </div>
            <div>
              <p>Sergio Angel</p>
              <p className="text-sm text-text-secondary">@nitelapse</p>
            </div>
          </td>
          <td className="p-1">67</td>
          <td className="p-1">
            <div className="rounded-full bg-card-bg">
              <div className="w-[60%] p-2 rounded-full bg-brand"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
