import streamlit as st
import streamlit_option_menu
from streamlit_extras.stoggle import stoggle
from processing import preprocess
from processing.display import Main

import os


page_bg_img = """

<style>
[data-testid = "stAppViewContainer"] {
background: linear-gradient(to right, #95c4f6,#ffff);
}
[data-testid = "stHeader"] {
background: linear-gradient(to right, #95c4f6,#ffff);
}
[data-testid = "stTitle"] {
background: linear-gradient(to right, #95c4f6,#ffff);
}
 div.stButton > button {
        background-color: white !important;  /* Light blue color */
        color: black !important;
        font-size: 16px !important;
        padding: 10px 15px !important;
        border-radius: 8px !important;
        border: none !important;
        cursor: pointer !important;
        transition: 0.3s !important;
    }
    div.stButton > button:hover {
        background-color: #95c4f6 !important; /* Darker shade on hover */
        color : white !important
    }
    
</style>

"""

st.set_page_config(layout="wide")
st.markdown(page_bg_img,unsafe_allow_html=True)

PORT = 8501  # Ensure this matches the one in use
st.session_state["streamlit_url"] = f"http://localhost:{PORT}"

st.title("Welcome to S-CineVerse Personalized Recommendation")

displayed = []

if "movie_number" not in st.session_state:
    st.session_state["movie_number"] = 0

if "selected_movie_name" not in st.session_state:
    st.session_state["selected_movie_name"] = ""

if "user_menu" not in st.session_state:
    st.session_state["user_menu"] = ""

def main():
    with Main() as bot:
        bot.main_()
        new_df, movies, movies2 = bot.getter()  # Ensure new_df is defined
        initial_options(new_df)

import streamlit as st
import streamlit_option_menu

def initial_options(new_df):
    
    st.session_state.user_menu = streamlit_option_menu.option_menu(
        menu_title="Welcome to Personalized Recommendation",
        options=["Recommend me a similar movie", "Describe me a movie"],
        icons=["person", "film"],
        menu_icon="list",
        orientation="horizontal",
        styles={
            "container": {"padding": "5px", "background-color": "#95c4f6"},  # Change background
            "icon": {"color": "#ffffff", "font-size": "20px"},  # Icon color
            "nav-link": {
                "font-size": "16px",
                "text-align": "center",
                "margin": "0px",
                "color": "#000000",
                "background-color": "#ffffff",
                "border-radius": "10px",
            },
            "nav-link-selected": {
                "background-color": "#3b82f6",  # Change selected color
                "color": "white",
                "font-weight": "bold",
            },
        }
    )

    if st.session_state.user_menu == "Recommend me a similar movie":
        recommend_display(new_df)
    elif st.session_state.user_menu == "Describe me a movie":
        display_movie_details()


def recommend_display(new_df):
    st.title("Movie Recommender System")

    selected_movie_name = st.selectbox("Select a Movie...", new_df["title"].values)

    rec_button = st.button("Recommend")
    if rec_button:
        st.session_state.selected_movie_name = selected_movie_name
        recommendation_tags(new_df, selected_movie_name, r"Model/Files/similarity_tags_tags.pkl", "are")
        recommendation_tags(new_df, selected_movie_name, r"Model/Files/similarity_tags_genres.pkl", "on the basis of genres are")
        recommendation_tags(new_df, selected_movie_name, r"Model/Files/similarity_tags_tcast.pkl", "on the basis of cast are")

def recommendation_tags(new_df, selected_movie_name, pickle_file_path, message):
    movies, posters = preprocess.recommend(new_df, selected_movie_name, pickle_file_path)
    st.subheader(f"Best Recommendations {message}...")

    rec_movies = []
    rec_posters = []
    cnt = 0

    for i, j in enumerate(movies):
        if cnt == 5:
            break
        if j not in displayed:
            rec_movies.append(j)
            rec_posters.append(posters[i])
            displayed.append(j)
            cnt += 1

    num_recommendations = len(rec_movies)
    cols = st.columns(num_recommendations)

    for i in range(num_recommendations):
        with cols[i]:
            st.text(rec_movies[i])
            st.image(rec_posters[i])

def display_movie_details():
    selected_movie_name = st.session_state.selected_movie_name
    info = preprocess.get_details(selected_movie_name)

    with st.container():
        image_col, text_col = st.columns((1, 2))
        with image_col:
            st.image(info[0])

        with text_col:
            st.title(selected_movie_name)
            col1, col2, col3 = st.columns(3)
            with col1:
                st.text("Rating")
                st.write(info[8])
            with col2:
                st.text("No. of ratings")
                st.write(info[9])
            with col3:
                st.text("Runtime")
                st.write(info[6])

            st.write("Overview")
            st.write(info[3])

            col1, col2, col3 = st.columns(3)
            with col1:
                st.text("Release Date")
                st.text(info[4])
            with col2:
                st.text("Budget")
                st.text(info[1])
            with col3:
                st.text("Revenue")
                st.text(info[5])

            col1, col2, col3 = st.columns(3)
            with col1:
                st.text("Genres")
                st.write(" . ".join(info[2]))

            with col2:
                st.text("Available in")
                st.write(" . ".join(info[13]))

            with col3:
                st.text("Directed by")
                st.text(info[12][0])

    # Display cast information
    st.header("Cast")
    cnt = 0
    urls, bio = [], []

    for i in info[14]:
        if cnt == 5:
            break
        result = preprocess.fetch_person_details(i)
        if isinstance(result, tuple) and len(result) == 2:
            url, biography = result
        else:
            url, biography = "default_image.jpg", "No biography available."
        urls.append(url)
        bio.append(biography)
        cnt += 1

    cols = st.columns(len(urls))
    for i in range(len(urls)):
        with cols[i]:
            st.image(urls[i])
            stoggle("Show More", bio[i])

if __name__ == "__main__":
    main()
