"""
Website application for creation of strong password of length choose by the user.
Password contains upper and lower latin alphabet letters, natural numbers and special characters.
"""

from website import create_app

app = create_app()


if __name__ == "__main__":
    app.run(debug=True)
