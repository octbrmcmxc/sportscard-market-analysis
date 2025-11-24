import { useState } from 'react'
import './App.css'
import { ChevronDown, TrendingUp, Users, DollarSign, Zap, Shield, BarChart3, Target } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedCard, setExpandedCard] = useState(null)

  // Revenue data
  const revenueData = [
    { year: 'Year 1', transaction: 350, subscription: 299.7, total: 649.7 },
    { year: 'Year 2', transaction: 1400, subscription: 1198.8, total: 2598.8 },
    { year: 'Year 3', transaction: 3500, subscription: 2997, total: 6497 },
    { year: 'Year 4', transaction: 7000, subscription: 5994, total: 12994 },
    { year: 'Year 5', transaction: 10500, subscription: 8991, total: 19491 },
  ]

  // User growth data
  const userGrowthData = [
    { year: 'Year 1', users: 50000 },
    { year: 'Year 2', users: 200000 },
    { year: 'Year 3', users: 500000 },
    { year: 'Year 4', users: 1000000 },
    { year: 'Year 5', users: 1500000 },
  ]

  // Profitability data
  const profitabilityData = [
    { year: 'Year 1', revenue: 649.7, costs: 1488, profit: -838.3 },
    { year: 'Year 2', revenue: 2598.8, costs: 2700, profit: -101.2 },
    { year: 'Year 3', revenue: 6497, costs: 4310, profit: 2187 },
    { year: 'Year 4', revenue: 12994, costs: 6370, profit: 6624 },
    { year: 'Year 5', revenue: 19491, costs: 8430, profit: 11061 },
  ]

  // Competitive analysis data
  const competitors = [
    { name: 'eBay', fees: '13.25%', strength: 'Large user base', weakness: 'High fees' },
    { name: 'Mercari', fees: '10%', strength: 'Mobile-first', weakness: 'Past fee changes' },
    { name: 'CollX', fees: '10%', strength: 'Card scanning', weakness: 'App stability' },
    { name: 'Whatnot', fees: '10.9%', strength: 'Live auctions', weakness: 'High total fees' },
    { name: 'BSC', fees: '0%', strength: 'No seller fees', weakness: 'Price accuracy' },
  ]

  const marketGaps = [
    { icon: '💰', title: 'Transparent Fees', desc: 'Competitive, predictable fee structure' },
    { icon: '🔍', title: 'Accurate Cataloging', desc: 'AI-powered card identification & valuation' },
    { icon: '🤝', title: 'Secure Trading', desc: 'Dedicated P2P trading with escrow' },
    { icon: '💬', title: 'Community Focus', desc: 'Integrated messaging & forums' },
    { icon: '📦', title: 'Shipping Solutions', desc: 'Integrated, cost-effective shipping' },
    { icon: '⚡', title: 'Reliability', desc: 'Stable, well-supported platform' },
  ]

  const developmentPhases = [
    { phase: 'Phase 1', months: '1-3', title: 'Foundation', items: ['Auth system', 'Basic cataloging', 'Marketplace MVP'] },
    { phase: 'Phase 2', months: '4-6', title: 'Core Features', items: ['Card scanning', 'Trading system', 'Payments'] },
    { phase: 'Phase 3', months: '7-9', title: 'Enhancement', items: ['Real-time features', 'Community', 'Analytics'] },
    { phase: 'Phase 4', months: '10-12', title: 'Launch Prep', items: ['Testing', 'App store', 'Marketing'] },
  ]

  const COLORS = ['#60a5fa', '#34d399', '#fbbf24', '#f87171', '#a78bfa']

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🎴</span>
            <span className="logo-text">CardFlow</span>
          </div>
          <ul className="nav-links">
            <li><button onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>Overview</button></li>
            <li><button onClick={() => setActiveSection('market')} className={activeSection === 'market' ? 'active' : ''}>Market</button></li>
            <li><button onClick={() => setActiveSection('technical')} className={activeSection === 'technical' ? 'active' : ''}>Technical</button></li>
            <li><button onClick={() => setActiveSection('financial')} className={activeSection === 'financial' ? 'active' : ''}>Financial</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Sports Card Mobile App</h1>
          <p className="hero-subtitle">A comprehensive business plan for the next generation of card trading</p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">$52.1B</div>
              <div className="stat-label">Market by 2034</div>
            </div>
            <div className="stat">
              <div className="stat-value">22.1%</div>
              <div className="stat-label">CAGR Growth</div>
            </div>
            <div className="stat">
              <div className="stat-value">1.5M</div>
              <div className="stat-label">Users by Year 5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <section className="section">
          <div className="container">
            <h2>Executive Overview</h2>
            <p className="section-intro">
              The sports card market is experiencing explosive growth, driven by digitization, live commerce, and increasing collector interest. Our platform addresses critical gaps in the market by providing a simple, intuitive, and reliable solution for collection management, buying, selling, and trading.
            </p>

            <div className="cards-grid">
              {marketGaps.map((gap, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">{gap.icon}</div>
                  <h3>{gap.title}</h3>
                  <p>{gap.desc}</p>
                </div>
              ))}
            </div>

            <div className="key-metrics">
              <h3>Key Metrics</h3>
              <div className="metrics-grid">
                <div className="metric-item">
                  <TrendingUp size={32} />
                  <h4>Market Growth</h4>
                  <p>10.8% - 22.1% CAGR</p>
                </div>
                <div className="metric-item">
                  <Users size={32} />
                  <h4>Target Users</h4>
                  <p>1.5M by Year 5</p>
                </div>
                <div className="metric-item">
                  <DollarSign size={32} />
                  <h4>Revenue Potential</h4>
                  <p>$19.5M by Year 5</p>
                </div>
                <div className="metric-item">
                  <Target size={32} />
                  <h4>Break-Even</h4>
                  <p>Year 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Market Section */}
      {activeSection === 'market' && (
        <section className="section">
          <div className="container">
            <h2>Market Analysis</h2>

            <div className="subsection">
              <h3>Market Size & Growth</h3>
              <div className="content-grid">
                <div className="text-content">
                  <p><strong>SkyQuestt Report:</strong> Valued at USD 1.47 billion in 2023, projected to reach USD 3.7 billion by 2032 (10.8% CAGR)</p>
                  <p><strong>Market Decipher:</strong> Global sports memorabilia market surging from $33.6B (2024) to $271.2B (2034) at 22.1% CAGR. Sports trading cards alone: $14.9B → $52.1B</p>
                </div>
                <div className="chart-container">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={userGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis dataKey="year" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #60a5fa' }} />
                      <Line type="monotone" dataKey="users" stroke="#60a5fa" strokeWidth={2} dot={{ fill: '#60a5fa' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Competitive Landscape</h3>
              <div className="competitors-table">
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Fees</th>
                      <th>Strength</th>
                      <th>Weakness</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitors.map((comp, idx) => (
                      <tr key={idx}>
                        <td><strong>{comp.name}</strong></td>
                        <td>{comp.fees}</td>
                        <td className="strength">{comp.strength}</td>
                        <td className="weakness">{comp.weakness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="subsection">
              <h3>Market Opportunities</h3>
              <div className="opportunities-list">
                {[
                  'Simplified & transparent fee structure (7% vs 8-13.25%)',
                  'Enhanced cataloging with AI-powered image recognition',
                  'Secure P2P trading with escrow services',
                  'Integrated communication & community features',
                  'Reliable shipping solutions with tracking',
                  'Superior user experience & customer support',
                  'Built-in secure payment processing'
                ].map((opp, idx) => (
                  <div key={idx} className="opportunity-item">
                    <span className="checkmark">✓</span>
                    <span>{opp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technical Section */}
      {activeSection === 'technical' && (
        <section className="section">
          <div className="container">
            <h2>Technical Architecture</h2>

            <div className="subsection">
              <h3>System Architecture</h3>
              <div className="architecture-diagram">
                <div className="arch-layer">
                  <div className="arch-label">Presentation</div>
                  <div className="arch-items">
                    <span>iOS App</span>
                    <span>Android App</span>
                    <span>Web Dashboard</span>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-label">API Gateway</div>
                  <div className="arch-items">
                    <span>Kong / AWS API Gateway</span>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-label">Microservices</div>
                  <div className="arch-items">
                    <span>User Management</span>
                    <span>Catalog Service</span>
                    <span>Marketplace</span>
                    <span>Trading</span>
                    <span>Messaging</span>
                    <span>Payments</span>
                    <span>Shipping</span>
                  </div>
                </div>
                <div className="arch-arrow">↓</div>
                <div className="arch-layer">
                  <div className="arch-label">Data Layer</div>
                  <div className="arch-items">
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                    <span>Redis</span>
                    <span>Elasticsearch</span>
                    <span>AWS S3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>Development Roadmap</h3>
              <div className="roadmap">
                {developmentPhases.map((phase, idx) => (
                  <div key={idx} className="roadmap-item">
                    <div className="roadmap-header">
                      <h4>{phase.phase}: {phase.title}</h4>
                      <span className="roadmap-months">{phase.months}</span>
                    </div>
                    <ul className="roadmap-items">
                      {phase.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="subsection">
              <h3>Tech Stack</h3>
              <div className="tech-stack">
                <div className="tech-category">
                  <h4>Frontend</h4>
                  <p>React Native, Swift/Kotlin, React.js, Tailwind CSS</p>
                </div>
                <div className="tech-category">
                  <h4>Backend</h4>
                  <p>Node.js, Python (FastAPI), Go, Express.js</p>
                </div>
                <div className="tech-category">
                  <h4>Database</h4>
                  <p>PostgreSQL, MongoDB, Redis, Elasticsearch, AWS S3</p>
                </div>
                <div className="tech-category">
                  <h4>Infrastructure</h4>
                  <p>AWS, Docker, Kubernetes, Prometheus, ELK Stack</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financial Section */}
      {activeSection === 'financial' && (
        <section className="section">
          <div className="container">
            <h2>Financial Projections</h2>

            <div className="subsection">
              <h3>Revenue Projections</h3>
              <div className="chart-container full-width">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="year" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #60a5fa' }} />
                    <Legend />
                    <Bar dataKey="transaction" stackId="a" fill="#60a5fa" name="Transaction Fees" />
                    <Bar dataKey="subscription" stackId="a" fill="#34d399" name="Subscriptions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="subsection">
              <h3>Profitability Analysis</h3>
              <div className="chart-container full-width">
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={profitabilityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="year" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #60a5fa' }} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#34d399" name="Revenue" />
                    <Bar dataKey="costs" fill="#f87171" name="Costs" />
                    <Bar dataKey="profit" fill="#60a5fa" name="Net Profit" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="subsection">
              <h3>Key Financial Metrics</h3>
              <div className="financial-metrics">
                <div className="metric-card">
                  <h4>Break-Even Point</h4>
                  <p className="metric-value">Year 3</p>
                  <p className="metric-desc">Projected profitability achieved</p>
                </div>
                <div className="metric-card">
                  <h4>Year 5 Revenue</h4>
                  <p className="metric-value">$19.5M</p>
                  <p className="metric-desc">From 1.5M active users</p>
                </div>
                <div className="metric-card">
                  <h4>Year 5 Profit</h4>
                  <p className="metric-value">$11.1M</p>
                  <p className="metric-desc">57% profit margin</p>
                </div>
                <div className="metric-card">
                  <h4>Valuation (Year 5)</h4>
                  <p className="metric-value">$100-300M</p>
                  <p className="metric-desc">5-15x revenue multiple</p>
                </div>
              </div>
            </div>

            <div className="subsection">
              <h3>User Growth Projections</h3>
              <div className="growth-table">
                <table>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Active Users</th>
                      <th>New Users</th>
                      <th>Growth Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Year 1</td>
                      <td>50,000</td>
                      <td>50,000</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>Year 2</td>
                      <td>200,000</td>
                      <td>150,000</td>
                      <td>300%</td>
                    </tr>
                    <tr>
                      <td>Year 3</td>
                      <td>500,000</td>
                      <td>300,000</td>
                      <td>150%</td>
                    </tr>
                    <tr>
                      <td>Year 4</td>
                      <td>1,000,000</td>
                      <td>500,000</td>
                      <td>100%</td>
                    </tr>
                    <tr>
                      <td>Year 5</td>
                      <td>1,500,000</td>
                      <td>500,000</td>
                      <td>50%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Sports Card Mobile App Business Plan. All rights reserved.</p>
          <p>This comprehensive analysis demonstrates the viability and market opportunity for a next-generation sports card trading platform.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
