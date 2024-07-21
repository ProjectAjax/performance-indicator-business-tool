import React, { useEffect, useState } from 'react';

const recommendationsList = {
  mindset: [
    "Explain how the job role strategically connects to the organizational strategy.",
    "Encourage reflection on skills and experience needed to deliver results effectively.",
    "Increase recognition for achieving deliverables."
  ],
  qualityTasks: [
    "Prioritize tasks effectively.",
    "Focus on high-impact tasks.",
    "Ensure task quality and completion."
  ],
  capability: [
    "Provide necessary training and resources.",
    "Encourage skill development.",
    "Recognize and utilize existing capabilities."
  ],
  culture: [
    "Promote a positive work environment.",
    "Encourage teamwork and collaboration.",
    "Recognize cultural contributions."
  ]
};

const Recommendation = ({ sliders }) => {
  const [recommendations, setRecommendations] = useState({});

  useEffect(() => {
    if (!sliders) return;

    const newRecommendations = {};
    for (const key in sliders) {
      if (sliders.hasOwnProperty(key)) {
        const value = sliders[key];
        const recList = recommendationsList[key];
        if (recList && value !== undefined) {
          if (value < 50) {
            newRecommendations[key] = recList[0];
          } else if (value < 75) {
            newRecommendations[key] = recList[1];
          } else {
            newRecommendations[key] = recList[2];
          }
        }
      }
    }
    setRecommendations(newRecommendations);
  }, [sliders]);

  return (
    <div className="recommendations">
      <h3>Recommended Actions</h3>
      <ul>
        {Object.keys(recommendations).map(key => (
          <li key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {recommendations[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;

