import React, { useState, useMemo } from 'react';
import { Search, Crown, Shield, FileText, DollarSign, Mail, Phone, User, Users } from 'lucide-react';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import './MembersList.css';

const MemberCard = ({ member }) => {
  

  return (
    <div className="member-card">
      <div className="member-photo-container">
        <img
          src={member.photo}
          alt={member.name}
          className="member-photo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=4f46e5&color=fff&size=200`;
          }}
        />
      </div>
      <h3 className="member-name">{member.name}</h3>
      <p className="member-role">{member.role}</p>
      
    </div>
  );
};

const MembersList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');

  const members = [
    { id: 1, name: "John Doe", role: "President", photo: img1, email: "john@example.com" },
    { id: 2, name: "Jane Smith", role: "Vice President", photo: img2, email: "jane@example.com" },
    { id: 3, name: "Alex Brown", role: "Secretary", photo: img3, email: "alex@example.com" },
    { id: 4, name: "Maria Johnson", role: "Treasurer", photo: "https://randomuser.me/api/portraits/women/63.jpg", email: "maria@example.com" },
    { id: 5, name: "Chris Evans", role: "President", photo: "https://randomuser.me/api/portraits/men/28.jpg", email: "chris@example.com" },
    { id: 6, name: "Emily White", role: "Secretary", photo: "https://randomuser.me/api/portraits/women/21.jpg", email: "emily@example.com" },
    { id: 7, name: "David Wilson", role: "Member", photo: "https://randomuser.me/api/portraits/men/32.jpg", email: "david@example.com" },
    { id: 8, name: "Sarah Davis", role: "Vice President", photo: "https://randomuser.me/api/portraits/women/45.jpg", email: "sarah@example.com" }
  ];

  const roleIcons = {
    'President': Crown,
    'Vice President': Shield,
    'Secretary': FileText,
    'Treasurer': DollarSign,
    'Member': User
  };

  const filteredMembers = useMemo(() => {
    return members.filter(member => {
      const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           member.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === 'All' || member.role === selectedRole;
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole, members]);

  const groupedMembers = useMemo(() => {
    return filteredMembers.reduce((acc, member) => {
      if (!acc[member.role]) {
        acc[member.role] = [];
      }
      acc[member.role].push(member);
      return acc;
    }, {});
  }, [filteredMembers]);

  const roles = ['All', ...new Set(members.map(member => member.role))];
  const totalMembers = members.length;
  const totalRoles = new Set(members.map(member => member.role)).size;

  return (
    <div className="members-container">
      <div className="members-header">
        <h1 className="members-title">Club Members</h1>
        <p className="members-subtitle">Meet our amazing team of dedicated individuals</p>
        
        <div className="search-filter-container">
          
          
          <div className="filter-tabs">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`filter-tab ${selectedRole === role ? 'active' : ''}`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">{totalMembers}</h3>
            <p className="stat-label">Total Members</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">{totalRoles}</h3>
            <p className="stat-label">Different Roles</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">{filteredMembers.length}</h3>
            <p className="stat-label">Showing</p>
          </div>
        </div>
      </div>

      {filteredMembers.length === 0 ? (
        <div className="no-results">
          <Users className="no-results-icon" />
          <h3 className="no-results-title">No members found</h3>
          <p className="no-results-text">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        Object.keys(groupedMembers).map(role => {
          const RoleIcon = roleIcons[role] || User;
          return (
            <div key={role} className="role-section">
              <div className="role-header">
                <RoleIcon className="role-icon" />
                <h2 className="role-title">{role}</h2>
                <span className="role-count">{groupedMembers[role].length}</span>
              </div>
              <div className="members-grid">
                {groupedMembers[role].map(member => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MembersList;