####Change file name to the name of game

# [START imports]
import os
import urllib
import array

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
# [END imports]

DEFAULT_LOGIN_NAME = 'default_login'


def login_key(login_name=DEFAULT_LOGIN_NAME):
    """Constructs a Datastore key for a Login entity.

    We use login_name as the key.
    """
    return ndb.Key('login', login_name)

class Profile(ndb.Model):
    """A main model for representing an individual login entry."""
    name = ndb.StringProperty(indexed=False)
    date = ndb.DateTimeProperty(auto_now_add=True)
    score = ndb.GenericProperty(default=0)
    stat_one = ndb.GenericProperty(indexed=False)
    stat_two = ndb.GenericProperty(indexed=False)
    stat_three = ndb.GenericProperty(indexed=False)
    stat_four = ndb.GenericProperty(indexed=False)
    stat_five = ndb.GenericProperty(indexed=False)
    stat_six = ndb.GenericProperty(indexed=False)
    stat_seven = ndb.GenericProperty(indexed=False)
    stat_eight = ndb.GenericProperty(indexed=False)
    stat_nine = ndb.GenericProperty(indexed=False)
    stat_ten = ndb.GenericProperty(indexed=False)
    stat_eleven = ndb.IntegerProperty(indexed=False)
    logged_in = ndb.IntegerProperty(default=0)


# [START main_page]
class MainPage(webapp2.RequestHandler):

    def get(self):
        stored = True
        current_profile = 'GenericName'

        #Queries and fetches 30 entries in the login database
        profiles_query = Profile.query(
            ancestor=login_key(DEFAULT_LOGIN_NAME)).order(-Profile.score)
        profiles = profiles_query.fetch(30)

        #Handles conditions for when the user is and isn't logged in
        user = users.get_current_user()
        if user:

            #Creates logout url
            url = users.create_logout_url(self.request.uri)
            url_linktext = 'Logout'

            #Checks if a profile is stored
            for profile in profiles:
                if user.nickname() == profile.name:
                    stored = True
                    current_profile = profile
                    profile.logged_in = profile.logged_in + 1
                    profile.put()
                    break
                else:
                    stored = False

            #Creates profile if new profile and sets the new profile as the current
            if stored == False or profiles_query.get() == None:
                new_profile = Profile(parent=login_key(DEFAULT_LOGIN_NAME))
                new_profile.name = users.get_current_user().nickname()
                new_profile.put()
                query_params = {'login_name': DEFAULT_LOGIN_NAME}
                self.redirect('/?' + urllib.urlencode(query_params))

                current_profile = new_profile

        else:
            url = users.create_login_url(self.request.uri)
            url_linktext = 'Login'
            stored = False

        #Passes values to use in the template in the html file belowl
        template_values = {
            'current_profile': current_profile,
            'stored': stored,
            'profiles': profiles,
            'login_name': urllib.quote_plus(DEFAULT_LOGIN_NAME),
            'url': url,
            'url_linktext': url_linktext,
        }
####    Change to the name of your main html file
        template = JINJA_ENVIRONMENT.get_template('stormmain.html')
        self.response.write(template.render(template_values))

    #Deletes all profiles passed in
    def clear(self, profiles):
        for profile in profiles:
            profile.put().delete()

# [END main_page]

class Login(webapp2.RequestHandler):
    def post(self):
        #Queries and fetches 30 entries in the login database
        profiles_query = Profile.query(
            ancestor=login_key(DEFAULT_LOGIN_NAME)).order(Profile.date)
        profiles = profiles_query.fetch(30)

        #Updates stats for a given profile
        user = users.get_current_user()
        for profile in profiles:
            if user.nickname() == profile.name:
                profile.stat_one = self.request.get('stat_one')
                profile.stat_two = self.request.get('stat_two')
                profile.stat_three = self.request.get('stat_three')
                profile.stat_four = self.request.get('stat_four')
                profile.stat_five = self.request.get('stat_five')
                profile.stat_six = self.request.get('stat_six')
                profile.stat_seven = self.request.get('stat_seven')
                profile.stat_eight = self.request.get('stat_eight')
                profile.stat_nine = self.request.get('stat_nine')
                profile.stat_ten = self.request.get('stat_ten')
                profile.score = self.request.get('score')
                profile.put()

        query_params = {'login_name': DEFAULT_LOGIN_NAME}
        self.redirect('/?' + urllib.urlencode(query_params))

app = webapp2.WSGIApplication([
    ('/', MainPage),
    ('/sign', Login),
], debug=True)
