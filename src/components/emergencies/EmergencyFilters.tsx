
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface EmergencyFiltersProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  priorityFilter: string;
  setPriorityFilter: (value: string) => void;
  applyFilters: () => void;
  resetFilters: () => void;
}

const EmergencyFilters: React.FC<EmergencyFiltersProps> = ({
  searchQuery,
  setSearchQuery,
  typeFilter,
  setTypeFilter,
  priorityFilter,
  setPriorityFilter,
  applyFilters,
  resetFilters
}) => {
  return (
    <Card className="border-dashed">
      <CardContent className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search emergencies..." 
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Type</label>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="medical">Medical</SelectItem>
                <SelectItem value="fire">Fire</SelectItem>
                <SelectItem value="traffic">Traffic Accident</SelectItem>
                <SelectItem value="crime">Crime/Security</SelectItem>
                <SelectItem value="natural">Natural Disaster</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-500">Priority</label>
            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Any priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="1">Critical (1)</SelectItem>
                <SelectItem value="2">High (2)</SelectItem>
                <SelectItem value="3">Medium (3)</SelectItem>
                <SelectItem value="4">Low (4)</SelectItem>
                <SelectItem value="5">Minimal (5)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-end space-x-2">
            <Button className="flex-1" onClick={applyFilters}>Apply Filters</Button>
            <Button variant="outline" onClick={resetFilters}>Reset</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyFilters;
