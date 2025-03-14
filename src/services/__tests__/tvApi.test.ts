/**
 * Integration test for the fetchSeries function.
 * This test verifies that the fetchSeries function correctly fetches
 * popular TV series from the TMDB API and handles errors appropriately.
 *
 * The first test case checks if the function returns the expected data
 * structure when the API responds successfully with popular series.
 * It mocks the API response to return a predefined series and verifies
 * that the data returned by fetchSeries matches the expected values.
 *
 * The second test case simulates a server error (500 Internal Server Error)
 * and checks that the fetchSeries function throws an error with the
 * appropriate message when the API request fails.
 */

import { fetchSeries } from "../tvApi";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

// We set up a mock server
export const server = setupServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("fetchSeries", () => {
  it("fetches popular series correctly", async () => {
    // We mock the API response
    server.use(
      http.get("https://api.themoviedb.org/3/tv/popular", () =>
        HttpResponse.json({
          page: 1,
          results: [
            {
              id: 1,
              name: "Test Series",
              poster_path: "/test.jpg",
              overview: "A test series",
              first_air_date: "2023-01-01",
            },
          ],
          total_pages: 500,
          total_results: 1000,
        })
      )
    );

    // We call the function
    const data = await fetchSeries(1);

    // We verify the transformed data
    expect(data.page).toBe(1);
    expect(data.results).toHaveLength(1);
    expect(data.results[0].name).toBe("Test Series");
    expect(data.results[0].image?.medium).toBe(
      "https://image.tmdb.org/t/p/w500/test.jpg"
    );
    expect(data.total_pages).toBe(500);
    expect(data.results[0].name).not.toBe("WRONG name series");
  });

  it("throws error on API failure", async () => {
    // We mock a 500 error
    server.use(
      http.get(
        "https://api.themoviedb.org/3/tv/popular",
        () =>
          new HttpResponse(null, {
            status: 500,
            statusText: "500 Internal Server Error",
          })
      )
    );

    // We verify that it throws an error
    await expect(fetchSeries(1)).rejects.toThrow(
      "Error fetching popular series"
    );
  });
});
