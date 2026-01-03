#!/bin/bash

# Script to download all case study images
# Run this script from the project root directory

echo "📸 Downloading case study images..."

# Create directories
mkdir -p public/case-studies/compassion-design-system
mkdir -p public/case-studies/tapestry-builder
mkdir -p public/case-studies/compassion-checkout-redesign
mkdir -p public/case-studies/worry-free
mkdir -p public/case-studies/dwell-advent-campaign
mkdir -p public/case-studies/dwell-marketing-landing-page
mkdir -p public/case-studies/dwell-affiliates-landing-page

# Compassion Design System
echo "Downloading Compassion Design System images..."
curl -o public/case-studies/compassion-design-system/hero.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/13b610f5-b49d-4aec-af05-72475141e587/Slide+16_9+-+2.png"
curl -o public/case-studies/compassion-design-system/theming.gif "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/6368ed13-7030-4873-a9c0-6ad0e2ff7822/ezgif-1-303a2463e9.gif"
curl -o public/case-studies/compassion-design-system/tokens.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/8eec5d8d-1fdc-4761-a791-10eda4056fe7/tokens.png"
curl -o public/case-studies/compassion-design-system/components.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/81a2af31-f633-476e-b591-8ec70d879496/components.png"
curl -o public/case-studies/compassion-design-system/sticker.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/f89db971-d0f3-4332-8ce0-4f410fea0e82/sticker.png"

# Tapestry Builder
echo "Downloading Tapestry Builder images..."
curl -o public/case-studies/tapestry-builder/hero.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/ad663561-5b15-4b6b-8e64-ab016ca5c349/Tapestry-hero.png"
curl -o public/case-studies/tapestry-builder/ideation.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/8b6aca38-99ee-4bd6-9bd1-96f7cc01b199/Tapestry-1.png"
curl -o public/case-studies/tapestry-builder/wireframes.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/aa2ea312-ec9e-4832-b94a-0fa785518eb9/Tapestry-3.png"
curl -o public/case-studies/tapestry-builder/desktop-testing.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/c54864e8-41c7-42e7-9784-ee7cd502498a/Tapestry-4.png"
curl -o public/case-studies/tapestry-builder/prototype.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/aca13d60-26b7-4703-8f36-4e50e59f661b/Tapestry.png"

# Compassion Checkout Redesign
echo "Downloading Compassion Checkout Redesign images..."
curl -o public/case-studies/compassion-checkout-redesign/header.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/edc0f35d-e640-4cc3-a13a-e146845cf227/checkout+header.png"
curl -o public/case-studies/compassion-checkout-redesign/flow-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/0486e37e-0a60-462d-9c2a-61da7401eeb5/checkout-flow.png"
curl -o public/case-studies/compassion-checkout-redesign/flow-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/0f544d11-b1ca-4886-b227-34faf2c6c298/checkout-flow.png"
curl -o public/case-studies/compassion-checkout-redesign/card-exploration-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/7b16c6e8-abfa-4de3-883e-ad8bc8d076b3/checkout-card-exploration.png"
curl -o public/case-studies/compassion-checkout-redesign/card-exploration-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/4098198a-97d9-4a7d-afee-35ca0c43c07f/checkout-card-exploration.png"
curl -o public/case-studies/compassion-checkout-redesign/donation-drawer.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/2251a160-c1a7-4a19-964e-422e463a1372/checkout+-+donation+drawer.png"
curl -o public/case-studies/compassion-checkout-redesign/secondary-actions.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/f6912dce-2c8a-4ef8-9103-0fe8be86cb4a/checkout+-+secondary+actions+drawer.png"

# Worry Free
echo "Downloading Worry Free images..."
curl -o public/case-studies/worry-free/mockup-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894660794-LRFM9V54ORWGHDOOFO8R/MacBook+Pro+-+4.png"
curl -o public/case-studies/worry-free/mockup-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894718408-0KMX14Z8JWOLJDQ8Q30I/MacBook+Pro+-+6.png"
curl -o public/case-studies/worry-free/emotional.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894791620-EO57NC80A2BJB4J7658R/MacBook+Pro+-+7.png"
curl -o public/case-studies/worry-free/absorption-icons.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894817810-ML505XBGOWN1JRGFY869/MacBook+Pro+-+8.png"
curl -o public/case-studies/worry-free/layering-system.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894842547-YXRYK6MHCG1HISGX5ZNB/MacBook+Pro+-+9.png"
curl -o public/case-studies/worry-free/exploration.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1617894871035-YCUGSY59NUWSDGFZB7HG/MacBook+Pro+-+10.png"

# Dwell Advent Campaign
echo "Downloading Dwell Advent Campaign images..."
curl -o public/case-studies/dwell-advent-campaign/branding.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718046099-6A2XR7SW1W7XZ7MH85DM/Dwell+-+Advent.png"
curl -o public/case-studies/dwell-advent-campaign/landing-page.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718095929-OYWXAGSF2LMS4FS2J8LN/1-1440x900.png"
curl -o public/case-studies/dwell-advent-campaign/email-design.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718132451-LH4QRM0LNX1BKJ8MS5QB/2-1440x900.png"
curl -o public/case-studies/dwell-advent-campaign/church-promo.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718191934-9IKLMJTZAUVPNKJDQPVW/3-1440x900.png"
curl -o public/case-studies/dwell-advent-campaign/offer-page-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718259524-QJYF36IBZKUTBH22LH1B/4-1440x900.png"
curl -o public/case-studies/dwell-advent-campaign/offer-page-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1607718306375-UXCYQ6X5FGKDXZ22L1L3/5-1440x900.png"

# Dwell Marketing Landing Page
echo "Downloading Dwell Marketing Landing Page images..."
curl -o public/case-studies/dwell-marketing-landing-page/mobile.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1583762999689-0FXZSRQCGAAP4O0IETFB/Dwell+-+Universal+-+mobile.png"
curl -o public/case-studies/dwell-marketing-landing-page/desktop-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1583505088101-LPJQ123BTSOSH08OVHAV/Dwell+-+Universal+-+desktop.png"
curl -o public/case-studies/dwell-marketing-landing-page/desktop-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1583931739519-TN3NQAEGSLH3AQ84LA2K/Dwell+-+Universal+-+desktop+-+2.png"

# Dwell Affiliates Landing Page
echo "Downloading Dwell Affiliates Landing Page images..."
curl -o public/case-studies/dwell-affiliates-landing-page/hero.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1626700472213-XDMMB5GV252MUTPQFF28/jm-dwell-affiliate-1.png"
curl -o public/case-studies/dwell-affiliates-landing-page/details-1.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1626700508721-4DVISSQW0C8EEPHJ4XPR/jm-dwell-affiliate-2.png"
curl -o public/case-studies/dwell-affiliates-landing-page/details-2.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1626700598054-14ZEVFL510EPO802R58C/jm-dwell-affiliate-3.png"
curl -o public/case-studies/dwell-affiliates-landing-page/details-3.png "https://images.squarespace-cdn.com/content/v1/5abd7686b27e396d15428187/1626700624667-41VIOBHDURAY130VHUF2/jm-dwell-affiliate-4.png"

echo "✅ Download complete! All images saved to public/case-studies/"
echo "📁 Total: 36 images downloaded"
