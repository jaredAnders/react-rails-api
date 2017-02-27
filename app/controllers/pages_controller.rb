class PagesController < ApplicationController
  def index
  end

  def import
    Question.import
  end
end
