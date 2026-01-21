const skillHealth = require("../data/skill-health.data");

exports.getSkillHealthSnapshot = (req, res) => {
  res.status(200).json(skillHealth);
};
