     document.addEventListener("DOMContentLoaded", () => {
            const copyButton = document.getElementById("copyButton");
            const codeEditor = document.getElementById("codeEditor");

            copyButton.addEventListener("click", () => {
                codeEditor.select();
                document.execCommand("copy");
                alert("Code copied to clipboard!");
            });
        });

        document.getElementById("generateBtn").addEventListener("click", function () {
            var repoLink = document.getElementById("repoInput").value.trim();

            if (repoLink !== "" && repoLink.startsWith("https://github.com/")) {
                generateMetadataText(repoLink);
            } else {
                alert("Please enter a valid GitHub repository link.");
            }
        });

        function generateMetadataText(repoLink) {
            var metadataString = "";

            // Extract owner and repo name
            var parts = repoLink.split("/");
            var owner = parts[parts.length - 2];
            var repoName = parts[parts.length - 1];

            // Generate random token
            var randomToken = generateRandomToken(32);

            // Construct the URL for metadata with random token
            var ogImageUrl = `https://opengraph.githubassets.com/${randomToken}/${owner}/${repoName}`;
            var twitterImageUrl = ogImageUrl;

            document.getElementById("generateBtn").addEventListener("click", function () {
                var repoLink = document.getElementById("repoInput").value.trim();

                if (repoLink !== "" && repoLink.startsWith("https://github.com/")) {
                    generateMetadataText(repoLink);
                } else {
                    alert("Please enter a valid GitHub repository link.");
                }
            });

            function generateMetadataText(repoLink) {
                var metadataString = "";

                // Extract owner and repo name
                var parts = repoLink.split("/");
                var owner = parts[parts.length - 2];
                var repoName = parts[parts.length - 1];

                // Generate random token
                var randomToken = generateRandomToken(32);

                // Construct the URL for metadata with random token
                var ogImageUrl = `https://opengraph.githubassets.com/${randomToken}/${owner}/${repoName}`;
                var twitterImageUrl = ogImageUrl;

                // Generate metadata string
                metadataString += "<!-- Copyright © 2024 Project created by AshutoshGoswami24 (https://github.com/AshutoshGoswami24) -->\n";
                metadataString += `<meta property="og:title" content="Your Title Here">\n`;
                metadataString += `<meta property="og:description" content="Your Description Here">\n`;
                metadataString += `<meta property="og:image" content="${ogImageUrl}">\n`;
                metadataString += `<meta property="og:image:width" content="1200">\n`;
                metadataString += `<meta property="og:image:height" content="630">\n`;
                metadataString += `<meta property="og:url" content="${repoLink}">\n`;
                metadataString += `<meta property="og:site_name" content="GitHub">\n`;
                metadataString += `<meta property="og:type" content="object">\n`;

                // Twitter
                metadataString += `<meta name="twitter:card" content="summary_large_image">\n`;
                metadataString += `<meta name="twitter:title" content="Your Title Here">\n`;
                metadataString += `<meta name="twitter:description" content="Your Description Here">\n`;
                metadataString += `<meta name="twitter:image" content="${twitterImageUrl}">\n`;

                // LinkedIn
                metadataString += `<meta property="article:author" content="GitHub">\n`;
                metadataString += `<meta property="article:published_time" content="2022-03-24">\n`;
                metadataString += `<meta property="article:modified_time" content="2022-03-24">\n`;

                // Discord
                metadataString += `<meta property="discord:image" content="${ogImageUrl}">\n`;

                // Telegram
                metadataString += `<meta property="telegram:image" content="${ogImageUrl}">\n`;

                // WhatsApp
                metadataString += `<meta property="whatsapp:image" content="${ogImageUrl}">\n`;

                // Set image preview
                document.getElementById("imagePreview").src = ogImageUrl;

                // Display metadata as code
                document.getElementById("codeEditor").value = metadataString;

                alert("Metadata generated successfully!");
            }
            // Set image preview
            document.getElementById("imagePreview").src = ogImageUrl;

            // Display metadata as code
            document.getElementById("codeEditor").value = metadataString;

            alert("Metadata generated successfully!");
        }

        function generateRandomToken(length) {
            var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
            var token = "";
            for (var i = 0; i < length; i++) {
                token += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return token;
        }

        document.getElementById("copyImgBtn").addEventListener("click", function () {
            var imageUrl = document.getElementById("imagePreview").src;
            copyToClipboard(imageUrl);
        });

        document.getElementById("openImgBtn").addEventListener("click", function () {
            var imageUrl = document.getElementById("imagePreview").src;
            window.open(imageUrl, "_blank");
        });

        function copyToClipboard(text) {
            var textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            alert("Image link copied to clipboard!");
        }
