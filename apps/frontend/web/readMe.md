
# BMI Calculator

## Overview
Zemi is a BMI calculator application designed specifically for users of Black African and Caribbean, and South Asian origin. The app calculates Body Mass Index (BMI) based on user height and weight input, then provides personalised meal suggestions tailored to cultural backgrounds and dietary preferences.


# 1. Core Design Philosophy

Simple & Effective: Clean white background with high-contrast text and vibrant, warm accent colors (e.g., deep orange, teal, or earthy green) to reflect warmth and energy.
Cultural Sensitivity: Uses a diverse, inclusive image set and, most importantly, a food database tailored to local dishes (Jollof, Fufu, Plantain, Roti, Curry) rather than Western-centric alternatives.
Accessibility: Large, easy-to-tap buttons and simple input fields for height/weight.

# 2. User Journey & Screen Design

# A. Onboarding: "The Cultural Context"
Instead of only height and weight, the onboarding asks for Cultural Dietary Preferences to tailor meal suggestions early.
Design Idea: A simple, card-based selection screen allowing users to pick preferences: West African, Caribbean, South Asian, Vegetarian/Halal Options.
Cultural Note: Incorporate 4-tier BMI categorization designed for South Asian/Black populations, recognizing that risks of conditions like Type 2 diabetes occur at lower BMI levels.

 # B. Dashboard: "Progress & Meals"
A minimal dashboard showing BMI trend over time with a visual ring graph.
Dashboard Features:
Current BMI: Large, clear number.
Daily "Zemi" Tips: Small, encouraging messages like "Enjoy your Roti with extra fiber today!"
Quick Log: "Log Today’s Fufu or Rice."

 # C. Meal Suggestion: "Your Food, Remastered"

Design Idea: The "Meal Suggestions" page focuses on image-driven recommendations. It uses artificial intelligence to offer healthier, lower-calorie alternatives to traditional high-carb or oil-intensive dishes.Example: Instead of "Avoid Rice," the app suggests "Portion Control: 1 cup of Jollof + Increased Veggies".
Feature: A "Swap" feature that suggests healthier cooking methods (e.g., boiling/baking instead of frying) for common dishes.

 # D. Input Mechanism: "Simple Tracking"
 
Design Idea: A "Camera-First" feature allows users to take a photo of their meal. The AI recognizes the cultural dish (e.g., Akara, Egusi) and logs the nutritional value, bridging the gap for foods often missed by Western apps.

# 3. Cultural Notes for UI/UX

<!-- Color Palette: Warm and inviting. Avoid cold, sterile blues common in some Western health apps. Use earthy tones, warm terracotta, and vibrant greens. -->
Language: Instead of "Failed" or "Obese," use "Let’s keep working" or "Focus on nutrient-dense choices." Social & Family Focus: Meal suggestions can include options for larger family-style meals, recognizing that food is often a communal experience in these cultures.

# 4. Summary of Key Differentiators
Feature	Standard App	Zemi App Idea
BMI Target	One-size-fits-all	Tailored risk thresholds for SA/Black users
Food Database	Pizza, Salads	Jollof, Fufu, Roti, Ackee/Saltfish
Tracking Manual Calories	Camera-based recognition of local dishes
Suggestions	"Eat Less"	"Try this healthier cooking method" This design ensures the app

## Features
- **BMI Calculation**: Enter your height and weight to get your BMI score
- **Personalized Results**: Receive your BMI classification and health category
- **Cultural Meal Suggestions**: Get meal recommendations based on your BMI score, featuring cuisines from Black African and Caribbean traditions


## How It Works
1. Input your height and weight
2. The app calculates your BMI
3. View your BMI score and category
4. Receive customized meal suggestions aligned with your cultural preferences

## Technologies
- **Frontend**: HTML, CSS, JavaScript
- **Data**: JSON files for recipes and BMI data
- [Add backend details if applicable]


## Getting Started

## Installation

[Step-by-step instructions to set up the app locally.]

1. Clone the repository: `git clone [repo URL]`
2. Navigate to the project directory: `cd zemi-app`
3. Open `apps/frontend/web/index.html` in a browser.

## Usage

[How to use the app after installation.]

- Navigate to the BMI calculator section.
- Enter your details for calculations.
- Browse meal suggestions.

## Project Structure

[A brief overview of the folder structure.]

```
zemi-app/
├── apps/
│   ├── api/
│   └── frontend/web/
│       ├── index.html
│       ├── css/styles.css
│       ├── js/
│       │   ├── script.js
│       │   ├── bmi.js
│       │   └── recipes.js
│       └── assets/
├── backend/
└── packages/db/
```

## Contributing

[Guidelines for contributing.]

## License

[Specify the license.]

## Contact

[Your contact info.] 