require 'test/unit'

class Thunk
  def initialize
    @used_ids = 0
    @content = [
	  [
	    [], #Function IDs
		[]  #Function Names
	  ],
	  [
	    [], #Expression IDs
		[]  #Expression Names
	  ],
	  [
	    [], #Call IDs
		[]  #Call Names
	  ]
	]
  end
  attr_accessor :content
  def create_function(name)
    @used_ids += 1
	@content[0][0].push(@used_ids)
    @content[0][1].push(name)
  end
  def create_call(name,receiver,arguments)
    @used_ids += 1
	@content[1][0].push(@used_ids)
    @content[1][1].push(name)
  end
end

class TestThunk < Test::Unit::TestCase
  def test_create_funtion
    test = Thunk.new
	test.create_function('main')
	assert_equal "main", test.content[0][1][0]
  end
  def test_create_call
    test = Thunk.new
	test.create_call('add',5,[5])
	assert_equal "add", test.content[1][1][0]
  end
end