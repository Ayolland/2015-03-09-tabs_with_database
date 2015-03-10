class Product
  
  attr_accessor :general_info, :technical_specs, :id, :where_to_buy
  
  def initialize(options)
    @general_info  = options[:general_info] || options["general_info"]
    @technical_specs   = options[:technical_specs]  || options["technical_specs"]
    @where_to_buy  = options[:where_to_buy] || options["where_to_buy"]
    @id     = options[:id]    || options["id"]
  end
  
  def self.find(id) #Returns a single Product object
    Product.new(DATABASE.execute("SELECT * FROM products WHERE id = #{id}")[0])
  end
  
  def self.all #Returns an array of Product objects
    results = DATABASE.execute("SELECT * FROM products")
    results.map { |hash| Product.new(hash) }
  end
  
  def insert #Adds a Product object into the database if the @id is nil
    if @id == nil
      sql_str = "INSERT into products (general_info,technical_specs,where_to_buy) VALUES ('#{@general_info}','#{@technical_specs}','#{@where_to_buy}')"
      DATABASE.execute(sql_str)
      @id = DATABASE.last_insert_row_id
    end
  end
  
  def save #Saves changes to a product object. Checks for a valid id.
    if DATABASE.execute("SELECT * FROM products WHERE id = #{@id}")[0]
      sql_str = "UPDATE products SET general_info = '#{@general_info}', technical_specs = '#{@technical_specs}', where_to_buy = '#{@where_to_buy}' WHERE id = #{@id}"
      binding.pry
      DATABASE.execute(sql_str)
    end
  end
  
  def delete #deletes the current product from the database
    DATABASE.execute("DELETE FROM products WHERE id = #{@id}")
  end
  
  def to_hash #returns a converted hash
    {
      id: id,
      general_info: general_info,
      technical_specs: technical_specs,
      where_to_buy: where_to_buy,
    }
  end
  
end