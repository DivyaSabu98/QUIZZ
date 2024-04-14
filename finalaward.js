// Declare variables for scores
let VocabularyScore;
let ArithmeticScore;
// Declare other score variables similarly

// Retrieve scores from localStorage
VocabularyScore = localStorage.getItem('VocabularyScore');
ArithmeticScore = localStorage.getItem('ArithmeticScore');
// Retrieve other scores similarly

// Function to calculate and update scores on the final page
function updateScores() {
    // Calculate percentage scores for each domain
    let vocabularyPercentage = (VocabularyScore / (18 * 10)) * 100;
    let arithmeticPercentage = (ArithmeticScore / (10 * 10)) * 100;
    let spatialPercentage = (SpatialReasoningScore / (10 * 10)) * 100;
    let creativePercentage = (CreativeExpressionScore / (10 * 10)) * 100;

    // Update scores on the final page
    document.getElementById("VocabularyScore").textContent = `${vocabularyPercentage.toFixed(2)}%`;
    document.getElementById("ArithmeticScore").textContent = `${arithmeticPercentage.toFixed(2)}%`;
    document.getElementById("SpatialAwarenessScore").textContent = `${spatialPercentage.toFixed(2)}%`;
    document.getElementById("CreativeScore").textContent = `${creativePercentage.toFixed(2)}%`;

    // Calculate total Emotional Awareness score
    let totalEmotionalAwareness = SelfAwarenessScore + SelfManagementScore + SocialAwarenessScore + RelationshipManagementScore;
    document.getElementById("EmotionalAwareness").textContent = totalEmotionalAwareness;

    // Calculate total scores for each personality subdomain
    let totalPersonalityScore = RealisticScore + InvestigativeScore + ArtisticScore + SocialScore + EnterprisingScore + ConventionalScore;

    // Find the highest scored personality subdomain
    let personalityType = "";
    switch (Math.max(RealisticScore, InvestigativeScore, ArtisticScore, SocialScore, EnterprisingScore, ConventionalScore)) {
        case RealisticScore:
            personalityType = "Realistic";
            break;
        case InvestigativeScore:
            personalityType = "Investigative";
            break;
        case ArtisticScore:
            personalityType = "Artistic";
            break;
        case SocialScore:
            personalityType = "Social";
            break;
        case EnterprisingScore:
            personalityType = "Enterprising";
            break;
        case ConventionalScore:
            personalityType = "Conventional";
            break;
    }
    document.getElementById("PersonalityType").textContent = personalityType;
}

// Function to display scores on the final page
function showScores() {
    // Call the function to calculate and update scores
    updateScores();

    // Show the section containing the scores
    document.getElementById("finalScoresSection").style.display = "block";
}

// Event listener for when the page content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Call the function to display scores when the page loads
    showScores();
});
