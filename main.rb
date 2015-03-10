require 'rubygems'
require 'bundler/setup'

require "sinatra"
require 'json'
require "sqlite3"
require 'pry'

DATABASE = SQLite3::Database.new("products.db")
DATABASE.results_as_hash = true

require_relative "product.rb"

get "/" do
  @all_products = Product.all
  puts "HOME"
  erb :'tabs'
end

get "/add" do
  binding.pry
  @all_products = Product.all
  Product.new(params).insert
  erb :'tabs'
end

get "/delete" do
  @all_products = Product.all
  Product.new(params).delete
  erb :'tabs'
end

get "/edit" do
  @all_products = Product.all
  Product.new(params).save
  erb :'tabs'
end