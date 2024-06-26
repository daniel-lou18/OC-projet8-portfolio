import MyLink from "../ui/MyLink";
import Reveal from "../ui/Reveal/Reveal";
import TrackBall from "../ui/TrackBall/TrackBall";

function Links() {
  return (
    <div className="ml-auto mr-auto mt-12 flex w-fit gap-6">
      <Reveal amount={0.1}>
        <MyLink
          to="https://github.com/daniel-lou18"
          target="_blank"
          aria-label="GitHub Daniel Derudder"
        >
          <TrackBall position="relative" style="transparent">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgb(51 65 85)"
                stroke="rgb(51 65 85)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
          </TrackBall>
        </MyLink>
      </Reveal>
      <Reveal>
        <MyLink
          to="https://www.linkedin.com/in/daniel-derudder/"
          target="_blank"
          aria-label="LinkedIn Daniel Derudder"
        >
          <TrackBall position="relative" style="transparent">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="rgb(51 65 85)"
                stroke="rgb(51 65 85)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
          </TrackBall>
        </MyLink>
      </Reveal>
      <Reveal>
        <MyLink
          to="https://leetcode.com/daniel-lou18/"
          target="_blank"
          aria-label="Leetcode Daniel Derudder"
        >
          <TrackBall position="relative" style="transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 32 32"
              width="24"
              fill="rgb(51 65 85)"
              stroke="rgb(51 65 85)"
              strokeWidth="2"
            >
              <path d="m21.469 23.907-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.688 1.823.663 2.536-.052.708-.713.735-1.848.047-2.536l-3.473-3.511c-.901-.891-2.032-1.505-3.261-1.787l3.287-3.333c.688-.687.667-1.823-.047-2.536s-1.849-.735-2.536-.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-.683 5.109-1.989l3.479-3.521c.688-.683.661-1.817-.052-2.531s-1.849-.74-2.531-.052zm6.28-6.558h-13.531c-.932 0-1.692.801-1.692 1.791 0 .991.76 1.797 1.692 1.797h13.531c.933 0 1.693-.807 1.693-1.797 0-.989-.76-1.791-1.693-1.791z" />
            </svg>
          </TrackBall>
        </MyLink>
      </Reveal>
    </div>
  );
}

export default Links;
