import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, HardHat, Award, Zap, Cpu, Leaf, ChevronDown } from 'lucide-react';

interface TradeData {
  name: string;
  green: string;
  red: string;
  competence: string;
  specialist: string;
}

const tradesData: TradeData[] = [
    { name: "Bricklayer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee (NVQ enrolled) / Red Experienced Worker (1‑year)", competence: "Blue Skilled Worker: NVQ Level 2 in Bricklaying", specialist: "" },
    { name: "Carpenter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Carpentry & Joinery", specialist: "" },
    { name: "Scaffolder", green: "❌ Not permitted – must use CISRS route", red: "CISRS Trainee Scaffolder (COTS course + CISRS recognised training)", competence: "CISRS Scaffolder Card (Advanced NVQ + assessment)", specialist: "CISRS Advanced / Supervisor; SSPTS for system scaffolds" },
    { name: "Electrician", green: "ECS Electrical Labourer Card (white/green stripe): ECS H&S Assessment + employer reference", red: "ECS Trainee Card (enrolled in JIB‑approved course)", competence: "ECS Gold Card (Installation Electrician): NVQ Level 3 + 18th Edition + AM2", specialist: "JIB grading; Experienced Worker alternative" },
    { name: "Plumber", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Plumbing", specialist: "Gas Safe Register (gas work); Unvented Hot Water (G3); WaterSafe registration" },
    { name: "Painter & Decorator", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Decorative Finishing", specialist: "" },
    { name: "Plasterer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Plastering", specialist: "" },
    { name: "Roofer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Roofing (slating/tiling or felt)", specialist: "CISRS if scaffolding required; CSCS PQP (being phased out)" },
    { name: "Joiner", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Carpentry & Joinery; Gold: NVQ Level 3", specialist: "" },
    { name: "Dryliner", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Dry Lining", specialist: "" },
    { name: "Floor Layer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Floorcovering", specialist: "" },
    { name: "Tiler", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Wall & Floor Tiling", specialist: "" },
    { name: "Glazier", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Glass Industries", specialist: "" },
    { name: "Steel Fixer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Steel Fixing", specialist: "" },
    { name: "Concrete Finisher", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Concreting", specialist: "" },
    { name: "Crane Operator", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "CPCS Red Trained Operator Card (theory + practical test)", competence: "CPCS Blue Competent Operator Card: NVQ Level 2 in Lifting Operations", specialist: "Medical (lifting ops); NPORS CSCS alternative" },
    { name: "Excavator Operator", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "CPCS Red Trained / NPORS CSCS Trainee Card", competence: "CPCS Blue Card or NPORS CSCS Competence Card: NVQ Level 2 in Plant Operations", specialist: "Choice of CPCS (large contractors) or NPORS (on‑site assessment)" },
    { name: "Drainlayer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Drainage Construction", specialist: "NRSWA Street Works Units: O1, O2, O3/O4/O5/O6, LA" },
    { name: "Insulation Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Insulation", specialist: "Asbestos Awareness (UKATA) – mandatory" },
    { name: "HVAC Technician", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Refrigeration & Air Conditioning", specialist: "F‑Gas Category 1 (legal requirement); IPAF (MEWPs)" },
    { name: "Lift Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Gold Advanced Craft: NVQ Level 3 in Lift Installation", specialist: "Lift Regulations 1996 compliance; Construction Plant Competence specific" },
    { name: "Fencer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Fencing", specialist: "" },
    { name: "Stone Mason", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Stonemasonry", specialist: "" },
    { name: "Acoustic Ceiling Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Ceiling Fixing", specialist: "PASMA (if working from mobile towers)" },
    { name: "Demolition Operative", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "CCDO Red Trainee Card (working toward NVQ Level 2)", competence: "CCDO Blue Competence Card: NVQ Level 2 in Demolition Operations", specialist: "Asbestos Awareness (UKATA); CCDO Demolition Safety courses" },
    { name: "Asphalt Worker", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Highways Maintenance", specialist: "NRSWA Street Works (if working on public highways); Manual Handling" },
    { name: "Mastic Asphalter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Highways/Roofing", specialist: "NRSWA Street Works (if applicable)" },
    { name: "Resin Flooring Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Floor Laying", specialist: "COSHH Awareness (handling resins)" },
    { name: "Screeder", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Screeding", specialist: "" },
    { name: "Stonemason (Fixer)", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Stonemasonry", specialist: "" },
    { name: "Terrazzo Worker", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Floor Laying", specialist: "COSHH Awareness (handling resin/marble dust)" },
    { name: "Fireproofer (sprayed)", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Passive Fire Protection", specialist: "FIRAS company certification; intumescent coating training" },
    { name: "Passive Fire Protection Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Passive Fire Protection", specialist: "FIRAS company certification; fire‑stopping / cavity barrier training" },
    { name: "Cladding Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Cladding Installation", specialist: "Building Safety Act compliance training; PASMA; IPAF" },
    { name: "Curtain Wall Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Cladding Installation", specialist: "Building Safety Act compliance; Working at Height; glazing systems training" },
    { name: "Slinger / Signaller", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "CPCS Red Trained / NPORS Trainee Card", competence: "CPCS Blue Competent Operator Card: NVQ Level 2 in Slinger/Signaller (or NPORS CSCS alternative)", specialist: "Medical certification (lifting ops)" },
    { name: "Plant Fitter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker (or CPCS): NVQ Level 2/3 in Plant Maintenance", specialist: "Mechanical engineering NVQ; CPCS (if operating plant); HGV License (if mobile)" },
    { name: "Shopfitter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Shopfitting or Advanced Carpentry", specialist: "PASMA; IPAF" },
    { name: "Kitchen Fitter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Carpentry (Bench Joinery or Site Carpentry)", specialist: "Gas Safe (if moving gas pipes); Water Regulations; PASMA" },
    { name: "Bathroom Fitter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Plumbing or Carpentry", specialist: "Gas Safe (if moving gas pipes); Water Regulations (WRAS); Unvented Hot Water (G3)" },
    { name: "Hard Landscaper", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker (working toward LISS/CSCS)", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Landscaping; LISS/CSCS Card (BALI)", specialist: "NRSWA (if working on highways); PASMA; Manual Handling" },
    { name: "Pavior", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Highway Maintenance", specialist: "NRSWA Street Works Units: O1, O3/O4/O5/O6/O8, LA" },
    { name: "Piling Operative", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "CPCS Red Trained (rig operator) / Red Trainee (non‑operator)", competence: "Blue Skilled Worker: NVQ Level 2 in Piling Operations; CPCS Blue (for rig operators)", specialist: "CPCS Piling Rig endorsement; Confined Space training; NPORS alternative" },
    { name: "Grout Hand", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Piling/Concreting", specialist: "Confined Space training; COSHH Awareness (cement/grout)" },
    { name: "Waterproofer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Waterproofing (Basements)", specialist: "Confined Space training (basement work)" },
    { name: "Lead Worker", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue/Gold Skilled Worker: NVQ Level 2/3 in Leadwork", specialist: "Working at Height certification" },
    { name: "Thatcher", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Gold Skilled Worker: NVQ Level 3 in Thatcher", specialist: "Working at Height certification; heritage skills certification" },
    { name: "Staircase Fitter", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Carpentry (Bench Joinery)", specialist: "PASMA; Manual Handling" },
    { name: "Access Floor Installer", green: "Green Labourer: CITB HS&E Test + Level 1 H&S (or 1‑day HSA)", red: "Red Trainee / Red Experienced Worker", competence: "Blue Skilled Worker: NVQ Level 2 in Dry Lining or Ceiling Fixing", specialist: "PASMA (mandatory); Manual Handling" },
    { name: "BEMS Technician", green: "Green Labourer (as electrical labourer via ECS)", red: "ECS Trainee Card (working toward qualifications)", competence: "White CSCS Card (Academically Qualified) – degree/HND; or ECS Gold Card (electrician route)", specialist: "Manufacturer training (Siemens, Trend, Schneider); BSRIA certification; CITB Managers & Professionals Test" }
];

export default function Trades() {
  const [selectedTradeIndex, setSelectedTradeIndex] = useState<number | null>(null);
  const selectedTrade = selectedTradeIndex !== null ? tradesData[selectedTradeIndex] : null;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <section className="philosophy-section !p-0 !bg-transparent">
        <div className="philosophy-container">
          <div className="prism-line"></div>
          <h1 className="philosophy-headline !text-5xl mb-2">TRADES</h1>
          <p className="philosophy-subheading !mb-12">
            CSCS / ECS / CISRS pathways
          </p>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="philosophy-headline !text-3xl !mb-0"></h2>
            </div>

            <div className="filter-bar mb-8">
              <div className="relative flex-1">
                <select 
                  className="w-full appearance-none bg-carbon-medium border border-metal-dark rounded-lg py-3 px-6 text-lg font-bold focus:outline-none focus:border-accent-purple transition-all cursor-pointer"
                  value={selectedTradeIndex ?? ''}
                  onChange={(e) => setSelectedTradeIndex(e.target.value ? parseInt(e.target.value) : null)}
                >
                  <option value="">- select a trade -</option>
                  {tradesData.map((trade, idx) => (
                    <option key={idx} value={idx}>
                      {trade.name}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-accent-purple">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {selectedTrade ? (
                <motion.div 
                  key={selectedTrade.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Entry & Red Cards */}
                    <div className="space-y-8">
                      <div className="pillar !p-0 overflow-hidden">
                        <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                          <Leaf className="text-accent-green" size={20} /> Entry / Green Card
                        </h3>
                        <div className="p-6 text-text-secondary font-medium leading-relaxed">
                          {selectedTrade.green}
                        </div>
                      </div>

                      <div className="pillar !p-0 overflow-hidden">
                        <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                          <HardHat className="text-accent-red" size={20} /> Red Card Options
                        </h3>
                        <div className="p-6 text-text-secondary font-medium leading-relaxed">
                          {selectedTrade.red}
                        </div>
                      </div>
                    </div>

                    {/* Competence & Specialist */}
                    <div className="space-y-8">
                      <div className="pillar !p-0 overflow-hidden">
                        <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                          <Award className="text-accent-cyan" size={20} /> Competence (Blue/Gold)
                        </h3>
                        <div className="p-6 text-text-secondary font-medium leading-relaxed">
                          {selectedTrade.competence}
                        </div>
                      </div>

                      <div className="pillar !p-0 overflow-hidden">
                        <h3 className="pillar-title !bg-carbon-medium !m-0 !p-4 !w-full !rounded-none border-b border-metal-dark flex items-center gap-2">
                          <Cpu className="text-accent-purple" size={20} /> Specialist Cards
                        </h3>
                        <div className="p-6 text-text-secondary font-medium leading-relaxed">
                          {selectedTrade.specialist ? (
                            <ul className="space-y-2">
                              {selectedTrade.specialist.split(';').map((s, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <span className="text-accent-green mt-1">&gt;&gt;</span> {s.trim()}
                                </li>
                              ))}
                            </ul>
                          ) : (
                            "— no additional mandatory licenses —"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="info-box text-center py-20">
                  <Zap className="text-accent-purple mx-auto mb-6 animate-pulse" size={64} />
                  <h3 className="text-2xl font-bold text-accent-cyan uppercase tracking-widest">select a trade from the dropdown</h3>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="note mt-20">
            <strong>Trade Intelligence:</strong> Data mapped from CITB, CSCS, ECS, and CISRS frameworks. All pathways verified for 2026.
          </div>
        </div>
      </section>
    </div>
  );
}
