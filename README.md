# Summarise

Summarise is a powerful tool that transforms YouTube videos into easily digestible content. It automatically generates concise summaries and creates chapter breakdowns with precise timestamps, allowing users to quickly navigate and understand video content. Moreover, the app features an interactive Q&A functionality, enabling users to delve deeper into the video's subject matter by asking specific questions.

## Features

- Input YouTube video URLs
- Generate transcriptions of the video content
- Create summaries and chapter breakdowns with timestamps
- Display video thumbnails
- Responsive design with a dark mode interface

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Groq API with Llama 3](https://groq.com/)
- [Deepgram API](https://deepgram.com/)
- [YouTube Data API](https://developers.google.com/youtube/v3)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or bun

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/summarise.git
   cd summarise
   ```

2. Install dependencies:

   ```
   bun install / npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```
   DATABASE_URL=your_postgres_database_url
   GROQ_API_KEY=your_groq_api_key
   DEEPGRAM_API_KEY=your_deepgram_api_key
   LANGCHAIN_API_KEY=your_langchain_api_key
   ```

4. Run the development server:

   ```
   bun run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

1. Enter a YouTube video URL in the input field.
2. Click the "Generate" button to process the video.
3. Wait for the summary and chapters to be generated.
4. View the generated content, including video thumbnail and timestamps.
5. You can ask additional questions based on the video.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
