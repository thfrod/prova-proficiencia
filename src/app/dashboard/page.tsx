"use client";

import { useAuthenticatedRoute } from "../hooks/useAuthenticatedRoute";
import { UseDashboard } from "../hooks/useDashboard";

const Dashboard = () => {
  useAuthenticatedRoute();
  const { dash, sales, setStartMonth, setEndMonth, startMonth, endMonth } =
    UseDashboard();

  const { totalUsers, activeUsers, newUsersThisMonth, userRetentionRate } =
    dash?.userStatistics || {};

  const months = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return (
    <div className="container px-16 py-8">
      <h1 className="mb-4">Dashboard</h1>

      {dash && (
        <div className="">
          {dash.userStatistics && (
            <>
              <h2>Estatisticas dos users</h2>

              <div className="card border">
                <p>Total de usuários: {totalUsers}</p>
                <p>Usuarios ativos: {activeUsers}</p>
                <p>Novos usuarios este mes: {newUsersThisMonth}</p>
                <p>Taxa de retencao de usuario: {userRetentionRate}</p>
              </div>
            </>
          )}
          <h2 className="mt-4">Estatisticas produtos</h2>

          {dash.topProducts.map((item) => (
            <div className="card border" key={item.id}>
              <p>Nome: {item.name}</p>
              <p>Vendas: {item.sales}</p>
              <p>Receita: {item.revenue}</p>
            </div>
          ))}

          <h2>Vendas</h2>
          <p>Filtrar</p>

          <div className="flex gap-4">
            <div>
              <label htmlFor="startMonth">Mês de início:</label>
              <select
                id="startMonth"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={month + index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="endMonth">Mês de fim:</label>
              <select
                id="endMonth"
                value={endMonth}
                onChange={(e) => setEndMonth(e.target.value)}
              >
                {months.map((month, index) => (
                  <option key={month + index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {sales.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
