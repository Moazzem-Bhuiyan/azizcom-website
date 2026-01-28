'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { PROJECTS } from '@/lib/ProjectData';

export default function ProjectsShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = PROJECTS.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.authority.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else {
        const capacityA = parseInt(a.capacity);
        const capacityB = parseInt(b.capacity);
        return sortOrder === 'asc' ? capacityA - capacityB : capacityB - capacityA;
      }
    });

    return filtered;
  }, [searchTerm, sortBy, sortOrder]);

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <section className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            {/* <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by project name or authority..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            /> */}
          </div>

          {/* Sort Controls */}
          {/* <div className="flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="name">Project Name</option>
                <option value="capacity">Capacity (TR)</option>
              </select>
            </div>
            <button
              onClick={toggleSort}
              className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-lg text-foreground hover:bg-accent/10 transition-colors"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
              />
              <span className="text-sm font-medium">
                {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              </span>
            </button>
          </div> */}

          {/* Results Count */}
          <p className="text-sm text-blue-900">
            Showing{' '}
            <span className="font-semibold text-foreground">
              {filteredAndSortedProjects.length}
            </span>{' '}
            of <span className="font-semibold text-foreground">{PROJECTS.length}</span> projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-3 grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {PROJECTS.length > 0 ? (
            PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group gap-3 p-4 sm:p-6 bg-black border border-border rounded-lg hover:border-accent transition-all hover:shadow-lg hover:bg-accent/5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <span className="text-sm font-bold text-accent pt-1 shrink-0">
                        #{project.id}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors text-pretty line-clamp-2">
                          {project.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                          {project.authority}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                      <p className="text-lg font-bold text-accent">{project.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No projects found matching your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
