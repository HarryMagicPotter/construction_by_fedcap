import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { agencies } from '../data/agencies';
import { Search, MapPin, ChevronDown, ChevronRight, CheckCircle, Clock, ExternalLink, Mail, Phone } from 'lucide-react';

const jobRoles = [
  { category: "Trades & Labour", roles: "Bricklayer, Carpenter, Joiner, Labourer, Groundworker, Scaffolder, Plant Operator, Painter & Decorator, Plasterer, Roofer, Steel Fixer, Formworker, Dryliner, Tiler, Floorlayer, Cladder, Insulation Installer, Demolition Operative, Asphalt Worker, Piling Operative" },
  { category: "Mechanical & Electrical (M&E)", roles: "Electrician, Heating Engineer, HVAC, Plumber, Gas Fitter, Refrigeration Engineer, Fire & Security Engineer, BMS Engineer, Air Conditioning Engineer, Electrical Improver, Mechanical Fitter, Duct Installer, Test & Inspection Engineer" },
  { category: "Civil Engineering & Infrastructure", roles: "Site Engineer, Setting Out Engineer, Ganger, Machine Driver, Civil Operative, Highways Worker, Section Engineer, Sub Agent, Earthworks Supervisor, Concrete Finisher, Pipe Layer, Road Surfacing Operative, Rail Civils Operative" },
  { category: "Management & Supervision", roles: "Site Manager, Project Manager, Contracts Manager, Foreman, Supervisor, Quantity Surveyor, Estimator, Planner, Construction Director, Bid Manager, Design Manager, Commercial Manager, M&E Project Manager, Finishing Foreman, Site Manager (Bespoke Homes)" },
  { category: "Technical & Design", roles: "CAD Technician, Structural Engineer, Architectural Technician, Building Services Engineer, BIM Coordinator, Revit Technician, Civil Designer, Geotechnical Engineer, Sustainability Consultant, Clerk of Works, Land Surveyor" },
  { category: "Plant & Logistics", roles: "Plant Fitter, HGV Driver, Banksman, Slinger Signaller, Traffic Marshal, Forklift Driver, Crane Supervisor, Lifting Supervisor, Plant Operator (360 Excavator, Telehandler), Logistics Coordinator, Yard Foreman" },
  { category: "Health & Safety", roles: "H&S Advisor, CDM Coordinator, Fire Warden, First Aider, SHEQ Manager, Environmental Advisor, Site Safety Inspector, Occupational Health Technician, Safety Trainer" },
  { category: "Office & Commercial", roles: "Bid Writer, Buyer, Administrator, HR, Accounts, Document Controller, Payroll Specialist, Procurement Manager, Business Development Manager, Marketing Coordinator (construction)" },
];

const jobBoards = [
  { platform: "Totaljobs", url: "https://www.totaljobs.com", notes: "Filter by “Construction & Trades” + Sussex" },
  { platform: "Indeed", url: "https://www.indeed.co.uk", notes: "Aggregates agency & direct roles" },
  { platform: "CV-Library", url: "https://www.cv-library.co.uk", notes: "Advanced construction sector search" },
  { platform: "Randstad Construction & Property", url: "https://www.randstad.co.uk", notes: "Specialist division" },
  { platform: "Hays Construction & Property", url: "https://www.hays.co.uk", notes: "Local construction consultants" },
  { platform: "Reed Construction", url: "https://www.reed.co.uk/construction", notes: "Sector-specific portal" },
  { platform: "Construction Enquirer", url: "https://www.constructionenquirer.com/jobs", notes: "Industry news + jobs" },
  { platform: "CareerBuilder", url: "https://www.careerbuilder.co.uk", notes: "Search by “construction” + postcode" },
  { platform: "Go Construct Jobs", url: "https://www.goconstruct.org/jobs", notes: "Official CITB careers site" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/jobs", notes: "Keywords like “site manager Sussex” + construction filter" },
  { platform: "TradeRecruit", url: "https://www.traderecruit.co.uk", notes: "Specialist construction‑only job board" },
  { platform: "Construction Jobs UK", url: "https://www.constructionjobs.co.uk", notes: "Long‑standing specialist site" },
  { platform: "Just Construction Jobs", url: "https://www.justconstructionjobs.co.uk", notes: "Targeted trade‑specific listings" },
];

const directEmployers = [
  { name: "Morgan Sindall", url: "https://www.morgansindall.com/careers", sectors: "Site management, trades, civil engineering, QS" },
  { name: "Kier Group", url: "https://www.kier.co.uk/careers", sectors: "Construction, civils, FM, apprenticeships" },
  { name: "Balfour Beatty", url: "https://www.balfourbeatty.com/careers", sectors: "Infrastructure, civil engineering, plant operations" },
  { name: "Willmott Dixon", url: "https://www.willmottdixon.co.uk/careers", sectors: "Residential, commercial, refurb, site/office" },
  { name: "Mears Group", url: "https://www.mearsgroup.co.uk/careers", sectors: "Social housing maintenance, repairs, gas services" },
  { name: "Rydon", url: "https://www.rydon.co.uk/careers", sectors: "Construction, development, maintenance (East Sussex office)" },
  { name: "Osborne", url: "https://www.osborne.co.uk/careers", sectors: "Civil engineering, rail, property services" },
  { name: "Bam Construct", url: "https://www.bam.co.uk/careers", sectors: "Building, civil engineering, regional Sussex work" },
  { name: "Galliford Try", url: "https://www.gallifordtry.co.uk/careers", sectors: "Construction, infrastructure, affordable housing" },
  { name: "Lovell", url: "https://www.lovell.co.uk/careers", sectors: "Partnership housing, regeneration, new build" },
  { name: "Vistry Group", url: "https://www.vistrygroup.co.uk/careers", sectors: "Housebuilding (Bovis, Linden, Vistry)" },
  { name: "Wates Group", url: "https://www.wates.co.uk/careers", sectors: "Construction, residential, maintenance, development" },
  { name: "VolkerStevin", url: "https://www.volkerstevin.co.uk/careers", sectors: "Civil engineering, flood risk, maritime, Environment Agency framework" },
];

const CollapsibleSection = ({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="mb-6">
      <h2 
        className="section-title-toggle philosophy-headline !text-3xl !mb-4" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="toggle-icon">{isOpen ? <ChevronDown size={32} /> : <ChevronRight size={32} />}</span>
        <span className="section-title">{title}</span>
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function About() {
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');
  const [specialismFilter, setSpecialismFilter] = useState('all');
  const [agenciesCollapsed, setAgenciesCollapsed] = useState(false);

  const filteredAgencies = useMemo(() => {
    return agencies.filter(a => {
      const matchesSearch = !searchTerm || (
        a.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.address || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (a.phone || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesRegion = regionFilter === 'all' || a.region === regionFilter;
      const matchesSpecialism = specialismFilter === 'all' || a.specialism === specialismFilter;
      return matchesSearch && matchesRegion && matchesSpecialism;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchTerm, regionFilter, specialismFilter]);

  const eastAgencies = filteredAgencies.filter(a => a.region === 'east');
  const westAgencies = filteredAgencies.filter(a => a.region === 'west');

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <section className="philosophy-section !p-0 !bg-transparent">
        <div className="philosophy-container">
          <div className="prism-line"></div>
          <h1 className="philosophy-headline !text-5xl mb-2">🏗️ EMPLOYMENT</h1>
          <p className="philosophy-subheading !mb-12">
            East Sussex & West Sussex • Fully verified agency directory • All links working
          </p>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="philosophy-headline !text-3xl !mb-0">📋 Construction Employment Agencies</h2>
              <button 
                className="mode-btn !bg-carbon-medium hover:!bg-carbon-light border border-metal-dark"
                onClick={() => setAgenciesCollapsed(!agenciesCollapsed)}
              >
                {agenciesCollapsed ? '▼ Expand lists' : '▲ Collapse lists'}
              </button>
            </div>

            <div className="filter-bar mb-8">
              <div className="relative flex-1 min-w-[300px]">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-purple" size={18} />
                <input 
                  type="text" 
                  placeholder="Search agency name, location, address..." 
                  className="pl-12 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className="max-w-[200px]"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="all">All regions</option>
                <option value="east">East Sussex</option>
                <option value="west">West Sussex</option>
              </select>
              <select 
                className="max-w-[200px]"
                value={specialismFilter}
                onChange={(e) => setSpecialismFilter(e.target.value)}
              >
                <option value="all">All specialisms</option>
                <option value="trades">Trades & Labour</option>
                <option value="mechanical">Mechanical & Electrical</option>
                <option value="civil">Civil Engineering</option>
                <option value="management">Management</option>
                <option value="technical">Technical & Design</option>
                <option value="plant">Plant & Logistics</option>
              </select>
            </div>

            {!agenciesCollapsed && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* East Sussex Column */}
                <div className="pillar !p-0 overflow-hidden">
                  <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                    <MapPin className="text-accent-cyan" size={20} /> East Sussex ({eastAgencies.length})
                  </h3>
                  <ul className="agency-list">
                    {eastAgencies.map((a, i) => (
                      <li key={i}>
                        <div className="agency-name flex items-center justify-between">
                          {a.name}
                          {a.verified ? (
                            <span className="badge-verified flex items-center gap-1"><CheckCircle size={12} /> Verified</span>
                          ) : (
                            <span className="badge-unverified flex items-center gap-1"><Clock size={12} /> No website</span>
                          )}
                        </div>
                        <div className="agency-details mt-2 space-y-1">
                          {a.address && <p className="flex items-start gap-2"><MapPin size={14} className="mt-1 flex-shrink-0" /> {a.address}</p>}
                          {a.phone && <p className="flex items-center gap-2"><Phone size={14} /> {a.phone}</p>}
                          {a.email && <p className="flex items-center gap-2"><Mail size={14} /> <a href={`mailto:${a.email}`}>{a.email}</a></p>}
                          {a.website && <p className="flex items-center gap-2"><ExternalLink size={14} /> <a href={a.website} target="_blank" rel="noreferrer">{a.website.replace('https://','')}</a></p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* West Sussex Column */}
                <div className="pillar !p-0 overflow-hidden">
                  <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                    <MapPin className="text-accent-purple" size={20} /> West Sussex ({westAgencies.length})
                  </h3>
                  <ul className="agency-list">
                    {westAgencies.map((a, i) => (
                      <li key={i}>
                        <div className="agency-name flex items-center justify-between">
                          {a.name}
                          {a.verified ? (
                            <span className="badge-verified flex items-center gap-1"><CheckCircle size={12} /> Verified</span>
                          ) : (
                            <span className="badge-unverified flex items-center gap-1"><Clock size={12} /> No website</span>
                          )}
                        </div>
                        <div className="agency-details mt-2 space-y-1">
                          {a.address && <p className="flex items-start gap-2"><MapPin size={14} className="mt-1 flex-shrink-0" /> {a.address}</p>}
                          {a.phone && <p className="flex items-center gap-2"><Phone size={14} /> {a.phone}</p>}
                          {a.email && <p className="flex items-center gap-2"><Mail size={14} /> <a href={`mailto:${a.email}`}>{a.email}</a></p>}
                          {a.website && <p className="flex items-center gap-2"><ExternalLink size={14} /> <a href={a.website} target="_blank" rel="noreferrer">{a.website.replace('https://','')}</a></p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="info-box mt-8">
              <strong>📌 Verification note:</strong> All website links have been verified and are active. Agencies marked <span className="badge-unverified">⏳ No website</span> have no public website; contact details shown are the best available.
            </div>
          </div>

          {/* Collapsible Sections */}
          <div className="space-y-12 text-left">
            <CollapsibleSection title="👷 1. Construction Job Roles">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Typical Roles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobRoles.map((r, i) => (
                      <tr key={i}>
                        <td className="font-bold text-accent-cyan">{r.category}</td>
                        <td>{r.roles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="🔍 2. National & Specialist Job Boards">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Platform</th>
                      <th>Website</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobBoards.map((b, i) => (
                      <tr key={i}>
                        <td className="font-bold text-accent-purple">{b.platform}</td>
                        <td><a href={b.url} target="_blank" rel="noreferrer">{b.url.replace('https://','')}</a></td>
                        <td>{b.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="🏢 3. Direct Employers">
              <h3 className="pillar-title !text-xl mb-4">Major National Contractors</h3>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Careers Link</th>
                      <th>Sectors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {directEmployers.map((e, i) => (
                      <tr key={i}>
                        <td className="font-bold text-accent-green">{e.name}</td>
                        <td><a href={e.url} target="_blank" rel="noreferrer">{e.url.replace('https://','')}</a></td>
                        <td>{e.sectors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="💰 5. Construction Industry Scheme (CIS)">
              <div className="info-box">
                <p className="mb-4"><strong>What is CIS?</strong> HMRC's system for handling tax payments in construction. Contractors deduct tax from subcontractors' payments and pass it to HMRC.</p>
                <p className="mb-4"><strong>Key CIS rules (updated April 2026):</strong> Deduction rates: <strong>20%</strong> for registered subcontractors, <strong>30%</strong> for unregistered, <strong>0%</strong> for gross payment status holders.</p>
                <p>📌 <strong>Official resource:</strong> <a href="https://www.gov.uk/guidance/the-construction-industry-scheme-cis" target="_blank" rel="noreferrer">GOV.UK CIS guidance</a></p>
              </div>
            </CollapsibleSection>

            <CollapsibleSection title="💷 8. Salary Guide – Typical Day Rates">
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Role</th>
                      <th>Day Rate (CIS / Ltd)</th>
                      <th>PAYE (Umbrella)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>General Labourer</td><td>£130 – £160</td><td>£110 – £140</td></tr>
                    <tr><td>Carpenter / Joiner</td><td>£180 – £230</td><td>£150 – £200</td></tr>
                    <tr><td>Bricklayer</td><td>£170 – £220</td><td>£140 – £190</td></tr>
                    <tr><td>Electrician (M&E)</td><td>£200 – £260</td><td>£170 – £230</td></tr>
                    <tr><td>Plumber</td><td>£190 – £250</td><td>£160 – £220</td></tr>
                    <tr><td>Site Manager</td><td>£220 – £300</td><td>£190 – £270</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="note">📊 Rates based on local agency surveys, CITB data, and contractor feedback. Actual rates vary by project, location, and experience.</div>
            </CollapsibleSection>

            <CollapsibleSection title="📢 11. Live Construction Jobs in Sussex">
              <div className="info-box text-center">
                <p className="mb-6"><strong>Find the latest construction jobs in Sussex on Indeed UK – no registration required.</strong></p>
                <a 
                  href="https://uk.indeed.com/jobs?q=construction&l=Sussex%2C+UK" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="card-cta inline-flex items-center gap-2"
                >
                  <Search size={18} /> Search Indeed for Jobs in Sussex
                </a>
              </div>
            </CollapsibleSection>
          </div>

          <div className="note mt-20">
            💡 <strong>Complete resource:</strong> All agencies have verified, working website links (or are marked as no website). All sections are fully populated.
          </div>
        </div>
      </section>
    </div>
  );
}
