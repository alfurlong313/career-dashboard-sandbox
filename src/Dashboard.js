import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex">
        <aside className="w-64 bg-white p-6 shadow-md hidden md:block">
          <h1 className="text-2xl font-bold mb-6">Abbey L. Furlong</h1>
          <p className="text-sm text-gray-600 mb-8">
            Strategy & Business Development
          </p>
          <nav className="space-y-4">
            <SidebarLink to="/overview" label="Professional Overview" />
            <SidebarLink to="/accomplishments" label="Accomplishments Hub" />
            <SidebarLink to="/interviews" label="Conversations & Interviews" />
            <SidebarLink to="/research" label="Industry Research" />
            <SidebarLink to="/extras" label="Downloadables & Extras" />
          </nav>
        </aside>

        <main className="flex-1 p-6 bg-pastel-blue text-gray-900">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/accomplishments" element={<Accomplishments />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/research" element={<Research />} />
            <Route path="/extras" element={<Extras />} />
            <Route
              path="*"
              element={
                <div className="text-center text-gray-500">
                  Select a section to get started.
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function SidebarLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded-xl hover:bg-pastel-peach transition text-gray-800 font-medium"
    >
      {label}
    </Link>
  );
}

function Overview() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Professional Overview</h2>
      <p className="text-gray-700 mb-4">
        I specialize in building and executing business growth strategies,
        leading cross-functional teams, and managing multimillion-dollar
        initiatives. With a strong foundation in public health and consulting, I
        bridge strategy with execution to deliver innovative, scalable solutions
        across healthcare and federal sectors.
      </p>
      <div className="text-sm text-gray-600 mb-2">
        Email:{" "}
        <a href="mailto:alfurlong1@gmail.com" className="text-blue-600">
          alfurlong1@gmail.com
        </a>
      </div>
      <div className="text-sm text-gray-600 mb-4">Phone: 202.631.9533</div>
      <a
        href="/Abbey%20Furlong_Resume.pdf"
        download
        className="inline-block bg-pastel-peach text-gray-900 font-semibold px-4 py-2 rounded-lg shadow hover:shadow-md transition"
      >
        Download Resume
      </a>
    </div>
  );
}

function Accomplishments() {
  return <SectionPage title="Accomplishments Hub" />;
}

function Interviews() {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    type: "Networking",
    date: "",
    notes: "",
    prep: "",
    research: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      name: "",
      company: "",
      role: "",
      type: "Networking",
      date: "",
      notes: "",
      prep: "",
      research: "",
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Conversations & Interviews
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input"
          />
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="input"
          />
          <input
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="input"
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="input"
          >
            <option>Networking</option>
            <option>Interview</option>
            <option>Informational</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
          />
        </div>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
          className="input"
          rows={3}
        />
        <textarea
          name="prep"
          value={formData.prep}
          onChange={handleChange}
          placeholder="Interview Prep"
          className="input"
          rows={2}
        />
        <input
          name="research"
          value={formData.research}
          onChange={handleChange}
          placeholder="Links to research/background"
          className="input"
        />
        <button
          type="submit"
          className="bg-pastel-peach px-4 py-2 rounded-lg shadow hover:shadow-md font-semibold"
        >
          Add Entry
        </button>
      </form>

      <ul className="space-y-4">
        {entries.map((entry, index) => (
          <li key={index} className="border p-4 rounded-xl shadow-sm">
            <p>
              <strong>{entry.name}</strong> at {entry.company} — {entry.role}
            </p>
            <p className="text-sm text-gray-600">
              {entry.type} on {entry.date}
            </p>
            <p className="text-sm mt-2">📝 {entry.notes}</p>
            <p className="text-sm">📋 Prep: {entry.prep}</p>
            <p className="text-sm">
              🔗 Research:{" "}
              <a
                href={entry.research}
                className="text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                {entry.research}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Research() {
  return <SectionPage title="Industry Research" />;
}

function Extras() {
  return <SectionPage title="Downloadables & Extras" />;
}

function SectionPage({ title }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  );
}

export default App;
ss;
