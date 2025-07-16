"use client";
import React from "react";
import { Skill } from "@/utils/interface";

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => (
  <div>
    {/* Render your skills here */}
    Skills grid goes here.
  </div>
);

export default SkillsGrid;