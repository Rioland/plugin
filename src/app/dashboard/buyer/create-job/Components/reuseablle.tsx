

type SkillTagProps = {
        label: string;
};

export function SkillTag({ label }: SkillTagProps) {
        return (
                <span className="inline-block px-4 py-2 rounded-full border border-white text-white text-sm mr-2 mb-2">
                        {label}
                </span>
        );
}




const selectedSkills = [
        "Home & Lifestyle",
        "Branding, Design & Identity",
        "Transportation & Logistics",
];

export function SkillInputSection() {
        return (
                <div className="w-full max-w-xl">
                        <label className="block text-white font-medium mb-2">
                                Search skills or add your own
                        </label>
                        <div className="flex items-center border border-white rounded-lg px-4 py-2">
                                <input
                                        type="text"
                                        placeholder="Search skills"
                                        className="bg-transparent outline-none flex-1 text-white placeholder:text-gray-400"
                                />
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                >
                                        <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                </svg>
                        </div>
                        <p className="text-gray-400 text-sm mt-1 mb-3">
                                For the best results, add 3–5 skills
                        </p>

                        <div className="mb-4">
                                <h4 className="text-white font-semibold mb-2">Selected Skills</h4>
                                <div className="flex flex-wrap">
                                        {selectedSkills.map((skill) => (
                                                <SkillTag key={skill} label={skill} />
                                        ))}
                                </div>
                        </div>
                </div>
        );
}



const categories = [
        "Business, Corporate & Financial services",
        "Website, App & Software Development",
        "Transportation & Logistics",
        "Branding, Design & Identity",
        "Health, Wellness & Fitness",
];

export function CategorySection() {
        return (
                <div className="mt-6">
                        <h4 className="text-white font-semibold mb-2">Categories</h4>
                        <div className="border-t border-gray-500 mb-4"></div>
                        <div className="flex flex-wrap">
                                {categories.map((category) => (
                                        <SkillTag key={category} label={category} />
                                ))}
                        </div>
                        <button className="text-white text-sm mt-2 underline">See more</button>
                </div>
        );
}


type RadioOptionProps = {
  name: string;
  label: string;
  description: string;
  value: string;
};

export  function RadioOption({
  name,
  label,
  description,
  value,
}: RadioOptionProps) {
  return (
    <label className="flex items-start space-x-3 mb-4 cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        className="mt-1 accent-yellow-400 w-4 h-4"
      />
      <div>
        <p className="text-white font-semibold">{label}</p>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </label>
  );
}



export  function ScopeEstimator() {
  return (
    <div className="w-full max-w-xl">
      {/* Scope Size */}
      <div className="mb-6">
        <RadioOption
          name="projectSize"
          value="large"
          label="Large"
          description="Longer term or complex initiatives"
        />
        <RadioOption
          name="projectSize"
          value="medium"
          label="Medium"
          description="Well-defined projects"
        />
        <RadioOption
          name="projectSize"
          value="small"
          label="Small"
          description="Quick and straightforward tasks"
        />
      </div>

      {/* Duration */}
      <div className="mb-6">
        <label className="text-white font-semibold block mb-2">
          How long will your work take?
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="bg-transparent border border-white text-white rounded-md px-4 py-2 w-24"
            defaultValue={45}
          />
          <span className="text-white">days</span>
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h4 className="text-white font-semibold mb-1">
          What level of experience will it need?
        </h4>
        <p className="text-sm text-gray-400 mb-4">
          This won’t restrict any proposals, but helps match expertise to your budget.
        </p>

        <RadioOption
          name="experience"
          value="entry"
          label="Entry"
          description="Looking for someone relatively new to this field"
        />
        <RadioOption
          name="experience"
          value="intermediate"
          label="Intermediate"
          description="Looking for substantial experience in this field"
        />
        <RadioOption
          name="experience"
          value="expert"
          label="Expert"
          description="Looking for comprehensive and deep expertise in this field"
        />
      </div>
    </div>
  );
}




