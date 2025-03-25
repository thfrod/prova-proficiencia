"use client"
import Chart from "react-google-charts";
import { useAuthenticatedRoute } from "../hooks/useAuthenticatedRoute";
import { UseDashboard } from "../hooks/useDashboard";


const Dashboard = () => {
    useAuthenticatedRoute()
    const { dash, sales, setStartMonth, setEndMonth, startMonth, endMonth } = UseDashboard()
    const { totalUsers, activeUsers, newUsersThisMonth, userRetentionRate } = dash?.userStatistics || {}
    // const profitChart = dash?.salesMetrics.map((item) => [item.month, item.profit, '#b87333'])
    // console.log(profitChart)



    return (
        <div className="container px-16 py-8">
            <h1 className="mb-4">Dashboard</h1>

            {dash && (
                <div className="">

                    {
                        dash.userStatistics && (
                            <>
                                <h2>Estatisticas dos users</h2>

                                <div className="card border">
                                    <p>Total de usuários: {totalUsers}</p>
                                    <p>Usuarios ativos: {activeUsers}</p>
                                    <p>Novos usuarios este mes: {newUsersThisMonth}</p>
                                    <p>Taxa de retencao de usuario: {userRetentionRate}</p>
                                </div>
                            </>
                        )
                    }
                    <h2 className="mt-4">Estatisticas produtos</h2>

                    {dash.topProducts.map((item) =>
                    (<div className="card border">
                        <p>Nome: {item.name}</p>
                        <p>Vendas: {item.sales}</p>
                        <p>Receita: {item.revenue}</p>
                    </div>
                    )

                    )}

                    <h2>Vendas</h2>
                    <p>Filtrar</p>

                    <p>Mes inicio</p>
                    <button onClick={() => setStartMonth('Janeiro')}>Janeiro</button><button onClick={() => setStartMonth('Fevereiro')}>Fevereiro</button><button onClick={() => setStartMonth('Março')}>Março</button>

                    <p>Mes final</p>
                    <button onClick={() => setEndMonth('Abril')}>Abril</button><button onClick={() => setEndMonth('Maio')}>Maio</button><button onClick={() => setEndMonth('Junho')}>Junho</button>

                    {sales.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>)
            }

        </div>
    )
}

export default Dashboard;