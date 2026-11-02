import React, { useState } from 'react';
import { Activity, AlertTriangle, BarChart3, CheckCircle2, ChevronRight, Clock, Code, Database, Eye, RefreshCw, Truck } from 'lucide-react';

interface RouteData {
  hub: string;
  dispatches: number;
  onTimeRate: number;
  avgDelayMins: number;
  status: 'optimal' | 'warning' | 'critical';
}

export const LogisticsControlTowerDemo: React.FC = () => {
  const [scenario, setScenario] = useState<'normal' | 'peak' | 'weather'>('normal');
  const [viewTab, setViewTab] = useState<'dashboard' | 'code' | 'architecture'>('dashboard');

  const scenarios = {
    normal: {
      name: "Standard Fleet Flow",
      badge: "Normal Operations",
      totalShipments: "1,840",
      onTimeRate: "98.4%",
      avgTransitHours: "14.2h",
      anomaliesResolved: "12 / 12",
      routes: [
        { hub: "Chennai Central Hub", dispatches: 620, onTimeRate: 98.8, avgDelayMins: 4, status: 'optimal' },
        { hub: "Bengaluru Logistics Ring", dispatches: 480, onTimeRate: 97.9, avgDelayMins: 8, status: 'optimal' },
        { hub: "Kochi Marine Gateway", dispatches: 310, onTimeRate: 99.1, avgDelayMins: 3, status: 'optimal' },
        { hub: "Madurai Distribution Terminal", dispatches: 260, onTimeRate: 98.2, avgDelayMins: 6, status: 'optimal' },
        { hub: "Nagercoil Regional Feeder", dispatches: 170, onTimeRate: 99.4, avgDelayMins: 2, status: 'optimal' },
      ] as RouteData[]
    },
    peak: {
      name: "Festive Holiday Surge",
      badge: "Peak Volume (2.1x)",
      totalShipments: "3,890",
      onTimeRate: "94.6%",
      avgTransitHours: "16.8h",
      anomaliesResolved: "48 / 52",
      routes: [
        { hub: "Chennai Central Hub", dispatches: 1240, onTimeRate: 93.4, avgDelayMins: 24, status: 'warning' },
        { hub: "Bengaluru Logistics Ring", dispatches: 1100, onTimeRate: 92.1, avgDelayMins: 31, status: 'warning' },
        { hub: "Kochi Marine Gateway", dispatches: 650, onTimeRate: 96.5, avgDelayMins: 14, status: 'optimal' },
        { hub: "Madurai Distribution Terminal", dispatches: 540, onTimeRate: 95.2, avgDelayMins: 18, status: 'optimal' },
        { hub: "Nagercoil Regional Feeder", dispatches: 360, onTimeRate: 97.8, avgDelayMins: 9, status: 'optimal' },
      ] as RouteData[]
    },
    weather: {
      name: "Monsoon / Coastal Alert",
      badge: "Weather Advisory Route Re-dispatch",
      totalShipments: "1,520",
      onTimeRate: "91.2%",
      avgTransitHours: "19.4h",
      anomaliesResolved: "34 / 36",
      routes: [
        { hub: "Chennai Central Hub", dispatches: 510, onTimeRate: 90.1, avgDelayMins: 42, status: 'warning' },
        { hub: "Bengaluru Logistics Ring", dispatches: 430, onTimeRate: 94.0, avgDelayMins: 19, status: 'optimal' },
        { hub: "Kochi Marine Gateway", dispatches: 240, onTimeRate: 86.4, avgDelayMins: 58, status: 'critical' },
        { hub: "Madurai Distribution Terminal", dispatches: 210, onTimeRate: 92.8, avgDelayMins: 22, status: 'warning' },
        { hub: "Nagercoil Regional Feeder", dispatches: 130, onTimeRate: 93.1, avgDelayMins: 20, status: 'warning' },
      ] as RouteData[]
    }
  };

  const currentData = scenarios[scenario];

  return (
    <div className="rounded-2xl bg-[#120a22] border border-purple-800/40 p-6 md:p-8 shadow-xl shadow-purple-950/40">
      {/* Top Header of the demo */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-900/30">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive Project Simulation</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Power BI & Python Logic</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">
            AI-Powered Smart Logistics Intelligence / Control Tower
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
            Live interactive telemetry modeled on the supply chain intelligence system built during the FemtoSoft Technologies AI internship.
          </p>
        </div>

        {/* View Mode Tabs */}
        <div className="flex items-center p-1 bg-[#090510] rounded-lg border border-purple-900/40 text-xs shrink-0 self-start md:self-auto">
          <button
            onClick={() => setViewTab('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium ${
              viewTab === 'dashboard' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Live KPIs</span>
          </button>
          <button
            onClick={() => setViewTab('code')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium ${
              viewTab === 'code' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Python / DAX</span>
          </button>
          <button
            onClick={() => setViewTab('architecture')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all font-medium ${
              viewTab === 'architecture' ? 'bg-purple-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Architecture</span>
          </button>
        </div>
      </div>

      {/* Scenario Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-4 border-b border-purple-900/20">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Simulation Scenario:</span>
          <div className="flex items-center gap-1.5">
            {(['normal', 'peak', 'weather'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setScenario(key)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  scenario === key
                    ? 'bg-purple-900/70 text-purple-200 border border-purple-600 shadow-sm'
                    : 'bg-[#180e2d] text-slate-400 hover:text-slate-200 border border-purple-900/30'
                }`}
              >
                {scenarios[key].name}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs font-mono text-purple-300 flex items-center gap-1.5">
          <RefreshCw className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Real-time predictive pipeline active</span>
        </div>
      </div>

      {/* Tab 1: Live Dashboard View */}
      {viewTab === 'dashboard' && (
        <div className="space-y-6 pt-4">
          {/* 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Active Shipments</span>
                <Truck className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white mt-2 tabular-nums">
                {currentData.totalShipments}
              </div>
              <div className="text-[11px] text-purple-300 mt-1">Multi-modal transit units</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>On-Time Rate</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-emerald-400 mt-2 tabular-nums">
                {currentData.onTimeRate}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">SLA Benchmark: &gt;90%</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Avg Transit Duration</span>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white mt-2 tabular-nums">
                {currentData.avgTransitHours}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">From order to doorstep</div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Anomalies Mitigated</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-amber-300 mt-2 tabular-nums">
                {currentData.anomaliesResolved}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">AI predictive route reroutes</div>
            </div>
          </div>

          {/* Hub Performance Visualizer & Route Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visualizer / Bar representation */}
            <div className="lg:col-span-7 p-5 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-200">Hub Delivery Efficiency vs Target</span>
                <span className="text-xs font-mono text-purple-400">Metric: SLA Compliance %</span>
              </div>

              <div className="space-y-3.5">
                {currentData.routes.map((route, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-medium">{route.hub}</span>
                      <span className="font-mono text-slate-200 tabular-nums">
                        {route.onTimeRate}% ({route.dispatches} units)
                      </span>
                    </div>
                    {/* SVG progress bar */}
                    <div className="w-full bg-[#1e1335] rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          route.status === 'optimal'
                            ? 'bg-gradient-to-r from-purple-500 to-emerald-400'
                            : route.status === 'warning'
                            ? 'bg-gradient-to-r from-purple-500 to-amber-400'
                            : 'bg-gradient-to-r from-purple-500 to-rose-500'
                        }`}
                        style={{ width: `${route.onTimeRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hub Detail Table */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#0e071a] border border-purple-900/40">
              <span className="text-xs font-semibold text-slate-200 block mb-3">Live Dispatch Telemetry</span>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-purple-900/40 text-slate-400 font-mono text-[11px]">
                      <th className="pb-2">Hub</th>
                      <th className="pb-2 text-right">Avg Delay</th>
                      <th className="pb-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-900/20">
                    {currentData.routes.map((route, idx) => (
                      <tr key={idx} className="hover:bg-purple-950/20">
                        <td className="py-2.5 font-medium text-slate-300">{route.hub.replace(" Hub", "").replace(" Logistics Ring", "")}</td>
                        <td className="py-2.5 text-right font-mono tabular-nums text-slate-200">
                          +{route.avgDelayMins}m
                        </td>
                        <td className="py-2.5 text-right">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                              route.status === 'optimal'
                                ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-800/50'
                                : route.status === 'warning'
                                ? 'bg-amber-950/70 text-amber-300 border border-amber-800/50'
                                : 'bg-rose-950/70 text-rose-300 border border-rose-800/50'
                            }`}
                          >
                            {route.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Python & DAX Code View */}
      {viewTab === 'code' && (
        <div className="pt-4 space-y-4">
          <div className="p-4 rounded-xl bg-[#090510] border border-purple-900/50 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="text-purple-400 font-semibold mb-2"># Google Colab: Python Exploratory Data Analysis & Delay Heuristic</div>
            <pre className="text-slate-300 leading-relaxed">
{`import pandas as pd
import numpy as np

# Load multi-hub logistics records & compute SLA breach probability
df = pd.read_csv("logistics_dispatch_stream.csv")
df['transit_hours'] = (pd.to_datetime(df['delivered_at']) - pd.to_datetime(df['dispatched_at'])).dt.total_seconds() / 3600

# Feature engineering: Lead time variance and weather factor penalty
df['delay_penalty'] = np.where(df['weather_advisory'] == True, 1.45, 1.0)
df['sla_target_met'] = df['transit_hours'] <= (df['promised_sla_hours'] * df['delay_penalty'])

# Compute hub-level reliability benchmark
hub_summary = df.groupby('origin_hub').agg(
    total_dispatches=('shipment_id', 'count'),
    on_time_percentage=('sla_target_met', lambda x: round(np.mean(x) * 100, 2)),
    avg_transit=('transit_hours', 'mean')
).sort_values(by='total_dispatches', ascending=False)

print(hub_summary)`}
            </pre>
          </div>

          <div className="p-4 rounded-xl bg-[#090510] border border-purple-900/50 font-mono text-xs text-slate-300 overflow-x-auto">
            <div className="text-purple-400 font-semibold mb-2">// Power BI DAX: Dynamic On-Time Delivery % Measure</div>
            <pre className="text-slate-300 leading-relaxed">
{`OnTimeDeliveryRate = 
DIVIDE(
    CALCULATE(
        COUNTROWS(LogisticsDispatches),
        LogisticsDispatches[DeliveryStatus] = "On-Time"
    ),
    COUNTROWS(LogisticsDispatches),
    0
)`}
            </pre>
          </div>
        </div>
      )}

      {/* Tab 3: System Architecture */}
      {viewTab === 'architecture' && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-300 font-bold text-xs">
                01
              </div>
              <h4 className="font-semibold text-white text-sm">Data Extraction & Wrangling</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Raw shipment tracking data ingested and cleaned in Python (Google Colab). Handling null values, GPS discrepancies, and delivery timestamp outliers.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-300 font-bold text-xs">
                02
              </div>
              <h4 className="font-semibold text-white text-sm">Predictive Delay Modeling</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Statistical correlation mapping between transit route congestion, weather conditions, and SLA breach probabilities to prompt proactive rerouting.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e071a] border border-purple-900/40 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-300 font-bold text-xs">
                03
              </div>
              <h4 className="font-semibold text-white text-sm">Executive Power BI Dashboard</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interactive reporting surface with drill-down capabilities by hub, carrier, and product category, empowering management to make rapid logistics decisions.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
